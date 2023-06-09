--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: master; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA master;


ALTER SCHEMA master OWNER TO postgres;

--
-- Name: roac_display; Type: TYPE; Schema: master; Owner: postgres
--

CREATE TYPE master.roac_display AS ENUM (
    '0',
    '1'
);


ALTER TYPE master.roac_display OWNER TO postgres;

--
-- Name: delete_category_with_nulls(integer); Type: PROCEDURE; Schema: master; Owner: postgres
--

CREATE PROCEDURE master.delete_category_with_nulls(IN category_id integer)
    LANGUAGE plpgsql
    AS $$
BEGIN
  UPDATE master.category
  SET cate_cate_id = NULL
  WHERE cate_cate_id = category_id;

  DELETE FROM master.category
  WHERE cate_id = category_id;
END;
$$;


ALTER PROCEDURE master.delete_category_with_nulls(IN category_id integer) OWNER TO postgres;

--
-- Name: insertcategory(json); Type: PROCEDURE; Schema: master; Owner: postgres
--

CREATE PROCEDURE master.insertcategory(IN input json)
    LANGUAGE plpgsql
    AS $$
DECLARE
  cate_name VARCHAR(255);
  cate_cate_id INT;
BEGIN
  cate_name := input ->> 'cate_name';
  cate_cate_id := (input ->> 'cate_cate_id')::INT;

  INSERT INTO master.category (cate_name, cate_cate_id)
  VALUES (cate_name, cate_cate_id);
END;
$$;


ALTER PROCEDURE master.insertcategory(IN input json) OWNER TO postgres;

--
-- Name: updatecategory(json); Type: PROCEDURE; Schema: master; Owner: postgres
--

CREATE PROCEDURE master.updatecategory(IN input json)
    LANGUAGE plpgsql
    AS $$
DECLARE
  cate_id INT;
  cate_name VARCHAR(255);
  cate_cate_id INT;
BEGIN
  cate_id := (input ->> 'cate_id')::INT;
  cate_name := (input ->> 'cate_name')::VARCHAR(255);
  cate_cate_id := (input ->> 'cate_cate_id')::INT;

  UPDATE master.category
  SET cate_name = cate_name,
      cate_cate_id = cate_cate_id
  WHERE cate_id = cate_id;
END;
$$;


ALTER PROCEDURE master.updatecategory(IN input json) OWNER TO postgres;

--
-- Name: updatecategory(integer, json); Type: FUNCTION; Schema: master; Owner: postgres
--

CREATE FUNCTION master.updatecategory(id integer, input json) RETURNS void
    LANGUAGE plpgsql
    AS $$
BEGIN
  UPDATE master.category
  SET cate_name = (input ->> 'cate_name')::VARCHAR(255),
      cate_cate_id = (input ->> 'cate_cate_id')::INT
  WHERE cate_id = id;
END;
$$;


ALTER FUNCTION master.updatecategory(id integer, input json) OWNER TO postgres;

--
-- Name: updatecategory(integer, character varying, integer); Type: PROCEDURE; Schema: master; Owner: postgres
--

CREATE PROCEDURE master.updatecategory(IN p_cate_id integer, IN p_cate_name character varying, IN p_cate_cate_id integer)
    LANGUAGE plpgsql
    AS $$
BEGIN
  UPDATE master.category
  SET cate_name = p_cate_name,
      cate_cate_id = p_cate_cate_id
  WHERE cate_id = p_cate_id;
END;
$$;


ALTER PROCEDURE master.updatecategory(IN p_cate_id integer, IN p_cate_name character varying, IN p_cate_cate_id integer) OWNER TO postgres;

--
-- Name: delete_category_with_nulls(integer); Type: PROCEDURE; Schema: public; Owner: postgres
--

CREATE PROCEDURE public.delete_category_with_nulls(IN category_id integer)
    LANGUAGE plpgsql
    AS $$
BEGIN
  -- Mengubah nilai foreign key menjadi NULL
  UPDATE category
  SET cate_cate_id = NULL
  WHERE cate_cate_id = category_id;

  -- Menghapus baris dari tabel "category"
  DELETE FROM category
  WHERE cate_id = category_id;
END;
$$;


ALTER PROCEDURE public.delete_category_with_nulls(IN category_id integer) OWNER TO postgres;

--
-- Name: insert_category(character varying, character varying); Type: PROCEDURE; Schema: public; Owner: postgres
--

CREATE PROCEDURE public.insert_category(IN p_cate_name character varying, IN p_parent_name character varying)
    LANGUAGE plpgsql
    AS $$
BEGIN
    -- Menyimpan nilai pada kolom "cate_name"
    INSERT INTO master.category (cate_name)
    VALUES (p_cate_name);

    -- Menghubungkan dengan "parent_name" dan mengupdate kolom "cate_cate_id"
    UPDATE master.category c1
    SET cate_cate_id = (
        SELECT c2.cate_id
        FROM master.category c2
        WHERE c2.cate_name = p_parent_name
    )
    WHERE c1.cate_name = p_cate_name;
END;
$$;


ALTER PROCEDURE public.insert_category(IN p_cate_name character varying, IN p_parent_name character varying) OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: address; Type: TABLE; Schema: master; Owner: postgres
--

CREATE TABLE master.address (
    addr_id integer NOT NULL,
    addr_line1 character varying(255),
    addr_line2 character varying(255),
    addr_postal_code character varying(10),
    addr_spatial_location json,
    addr_modifed_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    addr_city_id integer
);


ALTER TABLE master.address OWNER TO postgres;

--
-- Name: address_addr_id_seq; Type: SEQUENCE; Schema: master; Owner: postgres
--

CREATE SEQUENCE master.address_addr_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE master.address_addr_id_seq OWNER TO postgres;

--
-- Name: address_addr_id_seq; Type: SEQUENCE OWNED BY; Schema: master; Owner: postgres
--

ALTER SEQUENCE master.address_addr_id_seq OWNED BY master.address.addr_id;


--
-- Name: address_type; Type: TABLE; Schema: master; Owner: postgres
--

CREATE TABLE master.address_type (
    adty_id integer NOT NULL,
    adty_name character varying(15),
    adty_modified_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE master.address_type OWNER TO postgres;

--
-- Name: address_type_adty_id_seq; Type: SEQUENCE; Schema: master; Owner: postgres
--

CREATE SEQUENCE master.address_type_adty_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE master.address_type_adty_id_seq OWNER TO postgres;

--
-- Name: address_type_adty_id_seq; Type: SEQUENCE OWNED BY; Schema: master; Owner: postgres
--

ALTER SEQUENCE master.address_type_adty_id_seq OWNED BY master.address_type.adty_id;


--
-- Name: category; Type: TABLE; Schema: master; Owner: postgres
--

CREATE TABLE master.category (
    cate_id integer NOT NULL,
    cate_name character varying(255),
    cate_cate_id integer,
    cate_modified_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE master.category OWNER TO postgres;

--
-- Name: category_cate_id_seq; Type: SEQUENCE; Schema: master; Owner: postgres
--

CREATE SEQUENCE master.category_cate_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE master.category_cate_id_seq OWNER TO postgres;

--
-- Name: category_cate_id_seq; Type: SEQUENCE OWNED BY; Schema: master; Owner: postgres
--

ALTER SEQUENCE master.category_cate_id_seq OWNED BY master.category.cate_id;


--
-- Name: city; Type: TABLE; Schema: master; Owner: postgres
--

CREATE TABLE master.city (
    city_id integer NOT NULL,
    city_name character varying(155),
    city_modified_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    city_prov_id integer
);


ALTER TABLE master.city OWNER TO postgres;

--
-- Name: city_city_id_seq; Type: SEQUENCE; Schema: master; Owner: postgres
--

CREATE SEQUENCE master.city_city_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE master.city_city_id_seq OWNER TO postgres;

--
-- Name: city_city_id_seq; Type: SEQUENCE OWNED BY; Schema: master; Owner: postgres
--

ALTER SEQUENCE master.city_city_id_seq OWNED BY master.city.city_id;


--
-- Name: province; Type: TABLE; Schema: master; Owner: postgres
--

CREATE TABLE master.province (
    prov_id integer NOT NULL,
    prov_code character varying(5),
    prov_name character varying(85),
    prov_modified_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    prov_country_code character varying(3)
);


ALTER TABLE master.province OWNER TO postgres;

--
-- Name: cityprov; Type: VIEW; Schema: master; Owner: postgres
--

CREATE VIEW master.cityprov AS
 SELECT city.city_id,
    city.city_name,
    province.prov_name
   FROM (master.city
     JOIN master.province ON ((city.city_prov_id = province.prov_id)));


ALTER TABLE master.cityprov OWNER TO postgres;

--
-- Name: country; Type: TABLE; Schema: master; Owner: postgres
--

CREATE TABLE master.country (
    country_code character varying(3) NOT NULL,
    country_name character varying(85),
    country_modified_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE master.country OWNER TO postgres;

--
-- Name: education; Type: TABLE; Schema: master; Owner: postgres
--

CREATE TABLE master.education (
    edu_code character varying(5) NOT NULL,
    edu_name character varying(55)
);


ALTER TABLE master.education OWNER TO postgres;

--
-- Name: getprovinces; Type: VIEW; Schema: master; Owner: postgres
--

CREATE VIEW master.getprovinces AS
 SELECT country.country_name,
    province.prov_id,
    province.prov_name,
    province.prov_code,
    country.country_code
   FROM (master.country
     JOIN master.province ON (((country.country_code)::text = (province.prov_country_code)::text)));


ALTER TABLE master.getprovinces OWNER TO postgres;

--
-- Name: industry; Type: TABLE; Schema: master; Owner: postgres
--

CREATE TABLE master.industry (
    indu_code character varying(5) NOT NULL,
    indu_name character varying(85)
);


ALTER TABLE master.industry OWNER TO postgres;

--
-- Name: job_role; Type: TABLE; Schema: master; Owner: postgres
--

CREATE TABLE master.job_role (
    joro_id integer NOT NULL,
    joro_name character varying(55),
    joro_modified_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE master.job_role OWNER TO postgres;

--
-- Name: job_role_joro_id_seq; Type: SEQUENCE; Schema: master; Owner: postgres
--

CREATE SEQUENCE master.job_role_joro_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE master.job_role_joro_id_seq OWNER TO postgres;

--
-- Name: job_role_joro_id_seq; Type: SEQUENCE OWNED BY; Schema: master; Owner: postgres
--

ALTER SEQUENCE master.job_role_joro_id_seq OWNED BY master.job_role.joro_id;


--
-- Name: job_type; Type: TABLE; Schema: master; Owner: postgres
--

CREATE TABLE master.job_type (
    joty_id integer NOT NULL,
    joty_name character varying(55)
);


ALTER TABLE master.job_type OWNER TO postgres;

--
-- Name: job_type_joty_id_seq; Type: SEQUENCE; Schema: master; Owner: postgres
--

CREATE SEQUENCE master.job_type_joty_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE master.job_type_joty_id_seq OWNER TO postgres;

--
-- Name: job_type_joty_id_seq; Type: SEQUENCE OWNED BY; Schema: master; Owner: postgres
--

ALTER SEQUENCE master.job_type_joty_id_seq OWNED BY master.job_type.joty_id;


--
-- Name: modules; Type: TABLE; Schema: master; Owner: postgres
--

CREATE TABLE master.modules (
    module_name character varying(125) NOT NULL
);


ALTER TABLE master.modules OWNER TO postgres;

--
-- Name: province_prov_id_seq; Type: SEQUENCE; Schema: master; Owner: postgres
--

CREATE SEQUENCE master.province_prov_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE master.province_prov_id_seq OWNER TO postgres;

--
-- Name: province_prov_id_seq; Type: SEQUENCE OWNED BY; Schema: master; Owner: postgres
--

ALTER SEQUENCE master.province_prov_id_seq OWNED BY master.province.prov_id;


--
-- Name: route_actions; Type: TABLE; Schema: master; Owner: postgres
--

CREATE TABLE master.route_actions (
    roac_id integer NOT NULL,
    roac_name character varying(15),
    roac_orderby integer,
    roac_display character(1),
    roac_module_name character varying(125),
    CONSTRAINT route_actions_roac_display_check CHECK ((roac_display = ANY (ARRAY['0'::bpchar, '1'::bpchar])))
);


ALTER TABLE master.route_actions OWNER TO postgres;

--
-- Name: skill_template; Type: TABLE; Schema: master; Owner: postgres
--

CREATE TABLE master.skill_template (
    skte_id integer NOT NULL,
    skte_skill character varying(256),
    skte_description character varying(256),
    skte_week integer,
    skte_orderby integer,
    skte_modified_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    skty_name character varying(55),
    skte_skte_id integer
);


ALTER TABLE master.skill_template OWNER TO postgres;

--
-- Name: skill_template_skte_id_seq; Type: SEQUENCE; Schema: master; Owner: postgres
--

CREATE SEQUENCE master.skill_template_skte_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE master.skill_template_skte_id_seq OWNER TO postgres;

--
-- Name: skill_template_skte_id_seq; Type: SEQUENCE OWNED BY; Schema: master; Owner: postgres
--

ALTER SEQUENCE master.skill_template_skte_id_seq OWNED BY master.skill_template.skte_id;


--
-- Name: skill_type; Type: TABLE; Schema: master; Owner: postgres
--

CREATE TABLE master.skill_type (
    skty_name character varying(55) NOT NULL
);


ALTER TABLE master.skill_type OWNER TO postgres;

--
-- Name: status; Type: TABLE; Schema: master; Owner: postgres
--

CREATE TABLE master.status (
    status character varying(15) NOT NULL,
    status_modified_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE master.status OWNER TO postgres;

--
-- Name: view; Type: VIEW; Schema: master; Owner: postgres
--

CREATE VIEW master.view AS
 SELECT c1.cate_id,
    c1.cate_name,
    c1.cate_cate_id,
    c2.cate_name AS parent_name
   FROM (master.category c1
     LEFT JOIN master.category c2 ON ((c1.cate_cate_id = c2.cate_id)))
  ORDER BY c1.cate_id;


ALTER TABLE master.view OWNER TO postgres;

--
-- Name: working_type; Type: TABLE; Schema: master; Owner: postgres
--

CREATE TABLE master.working_type (
    woty_type character varying(5) NOT NULL,
    woty_name character varying(55)
);


ALTER TABLE master.working_type OWNER TO postgres;

--
-- Name: address addr_id; Type: DEFAULT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.address ALTER COLUMN addr_id SET DEFAULT nextval('master.address_addr_id_seq'::regclass);


--
-- Name: address_type adty_id; Type: DEFAULT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.address_type ALTER COLUMN adty_id SET DEFAULT nextval('master.address_type_adty_id_seq'::regclass);


--
-- Name: category cate_id; Type: DEFAULT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.category ALTER COLUMN cate_id SET DEFAULT nextval('master.category_cate_id_seq'::regclass);


--
-- Name: city city_id; Type: DEFAULT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.city ALTER COLUMN city_id SET DEFAULT nextval('master.city_city_id_seq'::regclass);


--
-- Name: job_role joro_id; Type: DEFAULT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.job_role ALTER COLUMN joro_id SET DEFAULT nextval('master.job_role_joro_id_seq'::regclass);


--
-- Name: job_type joty_id; Type: DEFAULT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.job_type ALTER COLUMN joty_id SET DEFAULT nextval('master.job_type_joty_id_seq'::regclass);


--
-- Name: province prov_id; Type: DEFAULT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.province ALTER COLUMN prov_id SET DEFAULT nextval('master.province_prov_id_seq'::regclass);


--
-- Name: skill_template skte_id; Type: DEFAULT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.skill_template ALTER COLUMN skte_id SET DEFAULT nextval('master.skill_template_skte_id_seq'::regclass);


--
-- Data for Name: address; Type: TABLE DATA; Schema: master; Owner: postgres
--

COPY master.address (addr_id, addr_line1, addr_line2, addr_postal_code, addr_spatial_location, addr_modifed_date, addr_city_id) FROM stdin;
1	jalan garuda1212	jalan rajawali1212	88880	"antara jalan garuda dan rajawali"	2023-05-27 20:56:26.835595+07	1
\.


--
-- Data for Name: address_type; Type: TABLE DATA; Schema: master; Owner: postgres
--

COPY master.address_type (adty_id, adty_name, adty_modified_date) FROM stdin;
2	Kantor	2023-06-06 06:24:17.300976+07
3	Lainnya	2023-06-06 06:24:17.300976+07
5	Toko	2023-06-06 06:24:17.300976+07
6	Kost	2023-06-10 01:10:06.361231+07
8	Kontrakan	2023-06-10 02:03:06.640844+07
1	Rumah Orang	2023-06-06 06:24:17.300976+07
\.


--
-- Data for Name: category; Type: TABLE DATA; Schema: master; Owner: postgres
--

COPY master.category (cate_id, cate_name, cate_cate_id, cate_modified_date) FROM stdin;
5	kurniawan	\N	2023-06-06 23:17:27.898352+07
67	ajiup	5	2023-06-08 00:44:01.294553+07
6	aji	\N	2023-06-06 23:50:50.172088+07
12	back end	\N	2023-06-07 22:14:49.37588+07
70	test	63	2023-06-08 12:01:29.312979+07
16	adeeeee	5	2023-06-07 22:30:58.455744+07
17	Jane Doe	5	2023-06-07 22:39:12.316982+07
20	back end 123	5	2023-06-07 22:49:19.213092+07
36	c123565	5	2023-06-07 22:56:29.836758+07
37	rfrfrefre	5	2023-06-07 23:11:36.463586+07
49	efefefew	5	2023-06-07 23:41:33.192566+07
63	efefefewe	5	2023-06-07 23:55:23.821807+07
65	addadawd	5	2023-06-08 00:00:27.377127+07
\.


--
-- Data for Name: city; Type: TABLE DATA; Schema: master; Owner: postgres
--

COPY master.city (city_id, city_name, city_modified_date, city_prov_id) FROM stdin;
1	bogor	2023-05-28 13:20:47.679272+07	1
2	Jakarta	2023-06-06 06:25:13.321271+07	1
8	Bogor	2023-06-06 06:26:45.972748+07	1
9	Bandung	2023-06-06 06:26:45.972748+07	1
12	Manna	2023-06-13 05:07:03.838505+07	5
\.


--
-- Data for Name: country; Type: TABLE DATA; Schema: master; Owner: postgres
--

COPY master.country (country_code, country_name, country_modified_date) FROM stdin;
MLY	malaysia	2023-05-28 15:47:21.74727+07
USA	United States	2023-06-06 06:27:23.866735+07
JPN	Japan	2023-06-06 06:27:23.866735+07
CHN	China	2023-06-10 14:49:40.034954+07
AUS	Australia New	2023-06-10 14:46:14.950445+07
IDN	indonesiaaaa	2023-05-28 13:05:16.257821+07
\.


--
-- Data for Name: education; Type: TABLE DATA; Schema: master; Owner: postgres
--

COPY master.education (edu_code, edu_name) FROM stdin;
BACH	Bachelor
MAST	Master
PHD	Ph.D.
DIP	Diploma
VOC	Vocational
\.


--
-- Data for Name: industry; Type: TABLE DATA; Schema: master; Owner: postgres
--

COPY master.industry (indu_code, indu_name) FROM stdin;
TECH	Technology
FASH	Fashion
FOOD	Food and Beverage
MED	Medical
ENT	Entertainment
\.


--
-- Data for Name: job_role; Type: TABLE DATA; Schema: master; Owner: postgres
--

COPY master.job_role (joro_id, joro_name, joro_modified_date) FROM stdin;
1	Software Engineer	2023-06-06 06:28:38.813421+07
2	Marketing Manager	2023-06-06 06:28:38.813421+07
3	Accountant	2023-06-06 06:28:38.813421+07
4	Graphic Designer	2023-06-06 06:28:38.813421+07
5	Human Resources Specialist	2023-06-06 06:28:38.813421+07
\.


--
-- Data for Name: job_type; Type: TABLE DATA; Schema: master; Owner: postgres
--

COPY master.job_type (joty_id, joty_name) FROM stdin;
1	Full-time
2	Part-time
3	Contract
4	Freelance
5	Internship
\.


--
-- Data for Name: modules; Type: TABLE DATA; Schema: master; Owner: postgres
--

COPY master.modules (module_name) FROM stdin;
Module A
Module B
Module C
Module D
Module E
Module X
Module ZZ
\.


--
-- Data for Name: province; Type: TABLE DATA; Schema: master; Owner: postgres
--

COPY master.province (prov_id, prov_code, prov_name, prov_modified_date, prov_country_code) FROM stdin;
5	BKL	Bengkoeleen	2023-06-13 05:06:37.749993+07	IDN
1	JABAR	Jawa Bagian Barat	2023-05-28 13:12:04.626687+07	IDN
6	JTM	Jawa Timur	2023-06-13 07:03:41.67997+07	IDN
\.


--
-- Data for Name: route_actions; Type: TABLE DATA; Schema: master; Owner: postgres
--

COPY master.route_actions (roac_id, roac_name, roac_orderby, roac_display, roac_module_name) FROM stdin;
1	Action 1	1	1	Module A
2	Action 2	2	1	Module B
3	Action 3	3	1	Module C
4	Action 4	4	1	Module D
5	Action 5	5	1	Module E
\.


--
-- Data for Name: skill_template; Type: TABLE DATA; Schema: master; Owner: postgres
--

COPY master.skill_template (skte_id, skte_skill, skte_description, skte_week, skte_orderby, skte_modified_date, skty_name, skte_skte_id) FROM stdin;
66	Skill 3	Description 3	3	3	2023-06-13 07:45:55.949295+07	javascript Js	57
67	Skill 4	Description 4	4	4	2023-06-13 07:46:49.718022+07	javascript Js	57
68	Skill 5	Description 5	5	5	2023-06-13 07:47:11.780421+07	javascript Js	57
17	Skill 1	Description 1	1	1	2023-06-13 07:27:43.167124+07	java	\N
57	Skill 2	Description 2	2	2	2023-06-13 07:32:00.864443+07	java	17
\.


--
-- Data for Name: skill_type; Type: TABLE DATA; Schema: master; Owner: postgres
--

COPY master.skill_type (skty_name) FROM stdin;
nodejs
reactjs
java
javascript Js
Jane Does
Ghayul
\.


--
-- Data for Name: status; Type: TABLE DATA; Schema: master; Owner: postgres
--

COPY master.status (status, status_modified_date) FROM stdin;
\.


--
-- Data for Name: working_type; Type: TABLE DATA; Schema: master; Owner: postgres
--

COPY master.working_type (woty_type, woty_name) FROM stdin;
\.


--
-- Name: address_addr_id_seq; Type: SEQUENCE SET; Schema: master; Owner: postgres
--

SELECT pg_catalog.setval('master.address_addr_id_seq', 1, true);


--
-- Name: address_type_adty_id_seq; Type: SEQUENCE SET; Schema: master; Owner: postgres
--

SELECT pg_catalog.setval('master.address_type_adty_id_seq', 17, true);


--
-- Name: category_cate_id_seq; Type: SEQUENCE SET; Schema: master; Owner: postgres
--

SELECT pg_catalog.setval('master.category_cate_id_seq', 125, true);


--
-- Name: city_city_id_seq; Type: SEQUENCE SET; Schema: master; Owner: postgres
--

SELECT pg_catalog.setval('master.city_city_id_seq', 12, true);


--
-- Name: job_role_joro_id_seq; Type: SEQUENCE SET; Schema: master; Owner: postgres
--

SELECT pg_catalog.setval('master.job_role_joro_id_seq', 5, true);


--
-- Name: job_type_joty_id_seq; Type: SEQUENCE SET; Schema: master; Owner: postgres
--

SELECT pg_catalog.setval('master.job_type_joty_id_seq', 1, false);


--
-- Name: province_prov_id_seq; Type: SEQUENCE SET; Schema: master; Owner: postgres
--

SELECT pg_catalog.setval('master.province_prov_id_seq', 6, true);


--
-- Name: skill_template_skte_id_seq; Type: SEQUENCE SET; Schema: master; Owner: postgres
--

SELECT pg_catalog.setval('master.skill_template_skte_id_seq', 68, true);


--
-- Name: address address_addr_line1_key; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.address
    ADD CONSTRAINT address_addr_line1_key UNIQUE (addr_line1);


--
-- Name: address address_addr_line2_key; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.address
    ADD CONSTRAINT address_addr_line2_key UNIQUE (addr_line2);


--
-- Name: address address_addr_postal_code_key; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.address
    ADD CONSTRAINT address_addr_postal_code_key UNIQUE (addr_postal_code);


--
-- Name: address address_pkey; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.address
    ADD CONSTRAINT address_pkey PRIMARY KEY (addr_id);


--
-- Name: address_type address_type_adty_name_key; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.address_type
    ADD CONSTRAINT address_type_adty_name_key UNIQUE (adty_name);


--
-- Name: address_type address_type_pkey; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.address_type
    ADD CONSTRAINT address_type_pkey PRIMARY KEY (adty_id);


--
-- Name: category category_cate_name_key; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.category
    ADD CONSTRAINT category_cate_name_key UNIQUE (cate_name);


--
-- Name: category category_pkey; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (cate_id);


--
-- Name: city city_city_name_key; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.city
    ADD CONSTRAINT city_city_name_key UNIQUE (city_name);


--
-- Name: city city_pkey; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.city
    ADD CONSTRAINT city_pkey PRIMARY KEY (city_id);


--
-- Name: country country_country_name_key; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.country
    ADD CONSTRAINT country_country_name_key UNIQUE (country_name);


--
-- Name: country country_pkey; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.country
    ADD CONSTRAINT country_pkey PRIMARY KEY (country_code);


--
-- Name: education education_edu_name_key; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.education
    ADD CONSTRAINT education_edu_name_key UNIQUE (edu_name);


--
-- Name: education education_pkey; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.education
    ADD CONSTRAINT education_pkey PRIMARY KEY (edu_code);


--
-- Name: industry industry_indu_name_key; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.industry
    ADD CONSTRAINT industry_indu_name_key UNIQUE (indu_name);


--
-- Name: industry industry_pkey; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.industry
    ADD CONSTRAINT industry_pkey PRIMARY KEY (indu_code);


--
-- Name: job_role job_role_joro_name_key; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.job_role
    ADD CONSTRAINT job_role_joro_name_key UNIQUE (joro_name);


--
-- Name: job_role job_role_pkey; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.job_role
    ADD CONSTRAINT job_role_pkey PRIMARY KEY (joro_id);


--
-- Name: job_type job_type_pkey; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.job_type
    ADD CONSTRAINT job_type_pkey PRIMARY KEY (joty_id);


--
-- Name: modules modules_pkey; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.modules
    ADD CONSTRAINT modules_pkey PRIMARY KEY (module_name);


--
-- Name: province province_pkey; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.province
    ADD CONSTRAINT province_pkey PRIMARY KEY (prov_id);


--
-- Name: province province_prov_code_key; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.province
    ADD CONSTRAINT province_prov_code_key UNIQUE (prov_code);


--
-- Name: route_actions route_actions_pkey; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.route_actions
    ADD CONSTRAINT route_actions_pkey PRIMARY KEY (roac_id);


--
-- Name: route_actions route_actions_roac_name_key; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.route_actions
    ADD CONSTRAINT route_actions_roac_name_key UNIQUE (roac_name);


--
-- Name: skill_template skill_template_pkey; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.skill_template
    ADD CONSTRAINT skill_template_pkey PRIMARY KEY (skte_id);


--
-- Name: skill_type skill_type_pkey; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.skill_type
    ADD CONSTRAINT skill_type_pkey PRIMARY KEY (skty_name);


--
-- Name: status status_pkey; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.status
    ADD CONSTRAINT status_pkey PRIMARY KEY (status);


--
-- Name: working_type working_type_pkey; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.working_type
    ADD CONSTRAINT working_type_pkey PRIMARY KEY (woty_type);


--
-- Name: working_type working_type_woty_name_key; Type: CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.working_type
    ADD CONSTRAINT working_type_woty_name_key UNIQUE (woty_name);


--
-- Name: address addr_city_id; Type: FK CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.address
    ADD CONSTRAINT addr_city_id FOREIGN KEY (addr_city_id) REFERENCES master.city(city_id);


--
-- Name: category category_cate_cate_id_fkey; Type: FK CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.category
    ADD CONSTRAINT category_cate_cate_id_fkey FOREIGN KEY (cate_cate_id) REFERENCES master.category(cate_id);


--
-- Name: city city_city_prov_id_fkey; Type: FK CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.city
    ADD CONSTRAINT city_city_prov_id_fkey FOREIGN KEY (city_prov_id) REFERENCES master.province(prov_id);


--
-- Name: province prov_country_code; Type: FK CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.province
    ADD CONSTRAINT prov_country_code FOREIGN KEY (prov_country_code) REFERENCES master.country(country_code);


--
-- Name: route_actions roac_module_name; Type: FK CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.route_actions
    ADD CONSTRAINT roac_module_name FOREIGN KEY (roac_module_name) REFERENCES master.modules(module_name);


--
-- Name: skill_template skill_template_skte_skte_id_fkey; Type: FK CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.skill_template
    ADD CONSTRAINT skill_template_skte_skte_id_fkey FOREIGN KEY (skte_skte_id) REFERENCES master.skill_template(skte_id);


--
-- Name: skill_template skill_template_skty_name_fkey; Type: FK CONSTRAINT; Schema: master; Owner: postgres
--

ALTER TABLE ONLY master.skill_template
    ADD CONSTRAINT skill_template_skty_name_fkey FOREIGN KEY (skty_name) REFERENCES master.skill_type(skty_name);


--
-- PostgreSQL database dump complete
--

