-- query for getting all column for all american cities.. with population larger than 100000
-- and here country code for america is 'USA'
SELECT * FROM CITY
WHERE POPULATION > 100000 and COUNTRYCODE = 'USA';

--  all american cities with population larger than 120000 and with american country code 'USA'

SELECT NAME FROM CITY
WHERE POPULATION > 120000 and COUNTRYCODE = 'USA';

-- all column for every row in CITY table
SELECT * FROM CITY;

-- all column for every row in CITY table where ID is 1661
SELECT * FROM CITY
WHERE ID = 1661;

-- all column for every japanese CITY table where country code is JPN
SELECT * FROM CITY
WHERE COUNTRYCODE = 'JPN';

-- names of all the japanese CITY table where country code is JPN
SELECT NAME FROM CITY
WHERE COUNTRYCODE = 'JPN';

-- List CIty and state from station table
SELECT CITY,STATE FROM STATION;

-- list of Distinct city names from STATION table where ID is Even
SELECT DISTINCT CITY FROM STATION
WHERE MOD(ID,2) = 0;

