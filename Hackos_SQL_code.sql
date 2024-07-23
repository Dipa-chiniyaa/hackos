-- query for getting all column for all american cities.. with population larger than 100000
-- and here country code for america is 'USA'
SELECT * FROM CITY
WHERE POPULATION > 100000 and COUNTRYCODE = 'USA';
