# CREATE DATABASE dumpling_rank_demo_03 CHARSET = UTF8;

USE dumpling_rank_demo_03;


/*************************************** Main Talbe ***************************************/
# v101_real_time_amount
# Latest sampling information of each project.
SELECT F1.project_id_id, F1.sample_time, PS.real_amount, PS.support_no 
FROM(
SELECT PS.project_id_id, MAX(PS.sample_time) sample_time
FROM dumpling_rank_demo_03.project_sample PS
GROUP BY PS.project_id_id) F1
INNER JOIN dumpling_rank_demo_03.project_sample PS
ON F1.sample_time = PS.sample_time AND F1.project_id_id = PS.project_id_id;

# v102_real_time_amount
SELECT FC.member_id, PI.fans_club_id, PI.project_name,  V101.*
FROM v101_real_time_amount V101
INNER JOIN dumpling_rank_demo_03.project_info PI
ON V101.project_id_id = PI.project_id
INNER JOIN dumpling_rank_demo_03.fans_club FC
ON PI.fans_club_id = FC.fans_club;

# v103_real_time_amount
SELECT V102.member_id member, SUM(V102.real_amount) real_amount, SUM(V102.support_no) support_no
FROM v102_real_time_amount V102
GROUP BY V102.member_id;


/*************************************** Growth ***************************************/
# Total growth
# v211_total_growth
SELECT F3.*, PS.real_amount
FROM(
	SELECT *
	FROM(
		SELECT DISTINCT DATE_FORMAT(PS.sample_time, '%Y-%m-%d %H:%i') sample_time
		FROM dumpling_rank_demo_03.project_sample PS) F1
	JOIN(
		SELECT DISTINCT PS.project_id_id
		FROM dumpling_rank_demo_03.project_sample PS) F2) F3
LEFT JOIN dumpling_rank_demo_03.project_sample PS
ON F3.sample_time = DATE_FORMAT(PS.sample_time, '%Y-%m-%d %H:%i') AND F3.project_id_id = PS.project_id_id
ORDER BY F3.sample_time, F3.project_id_id;


# v212_finished_projects
# Projects which are not hidden and finished.
SELECT F1.*, V101.sample_time latest_sample_time, V101.real_amount latest_amount, V101.support_no
FROM(	# F1: Select projects which are not hidden and finished.
	SELECT PI.project_id, PI.end_date, PI.fans_club_id
	FROM dumpling_rank_demo_03.project_info PI
	WHERE PI.is_hidden = 0 AND PI.end_date < NOW()) F1
INNER JOIN v101_real_time_amount V101
ON F1.project_id = V101.project_id_id;


# v213_unfinished_projects
# Projects which are not hidden and unfinished.
SELECT F1.*, PS.sample_time, PS.real_amount, PS.support_no
FROM(	# F1: Select projects which are not hidden and unfinished.
	SELECT PI.project_id, PI.end_date, PI.fans_club_id
	FROM dumpling_rank_demo_03.project_info PI
	WHERE PI.is_hidden = 0 AND PI.end_date > NOW()) F1
INNER JOIN dumpling_rank_demo_03.project_sample PS
ON F1.project_id = PS.project_id_id;


# v220_sample_detail
SELECT F3.*, PS.real_amount, PS.support_no
FROM(
	SELECT *
	FROM(
		SELECT DISTINCT DATE_FORMAT(PS.sample_time, '%Y-%m-%d %H:%i') sample_time
		FROM dumpling_rank_demo_03.project_sample PS) F1
	JOIN(
		SELECT DISTINCT PS.project_id_id
		FROM dumpling_rank_demo_03.project_sample PS) F2) F3
LEFT JOIN dumpling_rank_demo_03.project_sample PS
ON F3.sample_time = DATE_FORMAT(PS.sample_time, '%Y-%m-%d %H:%i') AND F3.project_id_id = PS.project_id_id;
# ORDER BY F3.sample_time, F3.project_id_id;


# g101_growth_total
SELECT NOW() sample_time, SUM(V103.real_amount) tamount_total
FROM v103_real_time_amount V103;


# g102_growth_theater
SELECT NOW() sample_time, F1.theater, SUM(F1.real_amount) amount_theater
FROM(
	SELECT V103.real_amount, M.theater_id theater
	FROM v103_real_time_amount V103
	INNER JOIN dumpling_rank_demo_03.member M
	ON V103.member = M.member) F1
GROUP BY F1.theater;


# g103_growth_team
SELECT NOW() sample_time, F1.team, SUM(F1.real_amount) amount_team
FROM(
	SELECT V103.real_amount, M.team_id team
	FROM v103_real_time_amount V103
	INNER JOIN dumpling_rank_demo_03.member M
	ON V103.member = M.member) F1
GROUP BY F1.team;


# g104_growth_member
SELECT NOW() sample_time, V103.member, V103.real_amount amount_member 
FROM dumpling_rank_demo_03.v103_real_time_amount V103;


/*************************************** Percentage ***************************************/
# Top members excluding SNH48一期生 and SNH48二期生

# p101_top_members
SELECT *
FROM v103_real_time_amount V
WHERE V.member IN (
	SELECT M.member
	FROM dumpling_rank_demo_03.member M
	WHERE M.join_time NOT IN ("SNH48一期生", "SNH48二期生")
);

# p110_real_amount_join_time
SELECT F1.join_time, SUM(real_amount) real_amount
FROM (
	SELECT V103.member, V103.real_amount, M.join_time
	FROM dumpling_rank_demo_03.v103_real_time_amount V103
	INNER JOIN dumpling_rank_demo_03.member M
	ON V103.member = M.member) F1
GROUP BY F1.join_time;

# p111_real_amount_join_time_others
SELECT SUM(V103.real_amount) real_amount_other
FROM (	# F1: 
	SELECT M.member, M.join_time
	FROM dumpling_rank_demo_03.member M
	WHERE M.join_time NOT IN ("SNH48一期生", "SNH48二期生", "SNH48三期生", "SNH48四期生", "SNH48五期生", "SNH48六期生")) F1
INNER JOIN dumpling_rank_demo_03.v103_real_time_amount V103
ON F1.member = V103.member;



