SELECT amount as most_frequent_value
FROM (
	SELECT
		amount,
		COUNT(amount) AS frequency_count
	FROM value_table	
	GROUP BY amount
	ORDER BY frequency_count DESC
	LIMIT 1
) AS amount_frequency
;
-- Alternative 2. Using CTE/WITH and LIMIT.

WITH amount_frequency AS (
	SELECT
		amount,
		COUNT(amount) AS frequency_count
	FROM value_table
	GROUP BY amount
	ORDER BY frequency_count DESC
	LIMIT 1
)
SELECT amount as most_frequent_value
FROM amount_frequency
;

-- Alternative 3. Using COUNT(*) on ORDER BY and LIMIT.
-- This is the most simple one

SELECT amount as most_frequent_value
FROM value_table
GROUP BY amount -- or most_frequent_value
ORDER BY COUNT(*) DESC
LIMIT 1
;

-- Alternative 4. Using CTE/WITH and MAX.
-- Most robust answer. It will return two values with there are two modes.

WITH amount_frequency AS (
	SELECT
		amount,
		COUNT(amount) AS frequency_count
	FROM value_table
	GROUP BY amount
)
SELECT amount as most_frequent_value
FROM amount_frequency
WHERE frequency_count = (SELECT MAX(frequency_count) FROM amount_frequency)
;