
# Unfinished
SELECT F3.*, 
	CASE WHEN PS.sample_time IS NOT NULL THEN PS.sample_time
    # Use the latest sample time if current sample time does not exist.
    # That is, this project has ended up.
    ELSE (
		SELECT T2.latest_sample_time
		FROM(
			SELECT T1.*, P.real_amount
            FROM(
				SELECT MAX(PS.sample_time) latest_sample_time, PS.project_id_id
				FROM dumpling_rank_demo_03.project_sample PS
				GROUP BY PS.project_id_id) T1
            INNER JOIN dumpling_rank_demo_03.project_sample P
            ON T1.latest_sample_time = P.sample_time AND T1.project_id_id = P.project_id_id) T2
		WHERE T2.project_id_id = F3.project_id_id)
    END AS latest_sampletime,
    
	CASE WHEN PS.real_amount IS NOT NULL THEN PS.real_amount
    ELSE 0
    END AS latest_amount
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


# v201_total_growth (abandoned)
SELECT F1.sample_time, SUM(F1.real_amount) total_amount
FROM(
	SELECT DATE_FORMAT(PS.sample_time, '%Y-%m-%d %H:%i') sample_time, PS.real_amount
	FROM dumpling_rank_demo_03.project_sample PS) F1
GROUP BY F1.sample_time;


# v202_theater_growth (abandoned)
SELECT F1.theater, F1.sample_time, SUM(F1.real_amount) total_amount
FROM(
	SELECT PS.sample_time, PS.real_amount, M.theater_id theater
	FROM dumpling_rank_demo_03.project_sample PS
	INNER JOIN dumpling_rank_demo_03.project_info PI
	ON PS.project_id_id = PI.project_id
	INNER JOIN dumpling_rank_demo_03.fans_club FC
	ON PI.fans_club_id = FC.fans_club
	INNER JOIN dumpling_rank_demo_03.member M
	ON FC.member_id = M.member) F1
GROUP BY F1.theater, F1.sample_time
ORDER BY F1.theater, F1.sample_time;