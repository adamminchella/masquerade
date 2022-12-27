DROP TABLE IF EXISTS sightings;
DROP TABLE IF EXISTS user_sessions;
DROP TABLE IF EXISTS accounts;

CREATE TABLE accounts (
    account_id serial PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    user_password CHAR(60) NOT NULL
);

CREATE TABLE sightings (
    sighting_id serial PRIMARY KEY,
    account_id INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    enitity VARCHAR NOT NULL,
    info VARCHAR(255),
    severity INT NOT NULL,
    sighting_location VARCHAR NOT NULL,
    sighting_date VARCHAR NOT NULL,
    FOREIGN KEY (account_id) REFERENCES accounts(account_id)
);

CREATE TABLE user_sessions (
    session_id serial PRIMARY KEY,
    session_token CHAR(20) NOT NULL,
    account_id INT NOT NULL,
    FOREIGN KEY (account_id) REFERENCES accounts(account_id)
);