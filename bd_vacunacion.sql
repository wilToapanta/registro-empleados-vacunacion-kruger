PGDMP                         z            bd_vacunacion    14.4    14.4                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16394    bd_vacunacion    DATABASE     i   CREATE DATABASE bd_vacunacion WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE bd_vacunacion;
                postgres    false            ?            1259    24606    employee    TABLE     ?  CREATE TABLE public.employee (
    id_employe integer NOT NULL,
    address character varying(255),
    birth_date character varying(255),
    identification character varying(255),
    last_names character varying(255),
    mail character varying(255),
    names character varying(255),
    phone character varying(255),
    vaccination_status character varying(255),
    vaccination_type character varying(255)
);
    DROP TABLE public.employee;
       public         heap    postgres    false            ?            1259    24605    employee_id_employe_seq    SEQUENCE     ?   CREATE SEQUENCE public.employee_id_employe_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.employee_id_employe_seq;
       public          postgres    false    211                       0    0    employee_id_employe_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.employee_id_employe_seq OWNED BY public.employee.id_employe;
          public          postgres    false    210            ?            1259    16430    hibernate_sequence    SEQUENCE     {   CREATE SEQUENCE public.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.hibernate_sequence;
       public          postgres    false            ?            1259    24641    hibernate_sequences    TABLE     t   CREATE TABLE public.hibernate_sequences (
    sequence_name character varying(255) NOT NULL,
    next_val bigint
);
 '   DROP TABLE public.hibernate_sequences;
       public         heap    postgres    false            ?            1259    24633    user_employee    TABLE     ?   CREATE TABLE public.user_employee (
    id_user bigint NOT NULL,
    id_employee integer,
    password character varying(255),
    rol character varying(255),
    usuario character varying(255)
);
 !   DROP TABLE public.user_employee;
       public         heap    postgres    false            ?            1259    24632    user_employee_id_user_seq    SEQUENCE     ?   CREATE SEQUENCE public.user_employee_id_user_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.user_employee_id_user_seq;
       public          postgres    false    213                       0    0    user_employee_id_user_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.user_employee_id_user_seq OWNED BY public.user_employee.id_user;
          public          postgres    false    212            f           2604    24609    employee id_employe    DEFAULT     z   ALTER TABLE ONLY public.employee ALTER COLUMN id_employe SET DEFAULT nextval('public.employee_id_employe_seq'::regclass);
 B   ALTER TABLE public.employee ALTER COLUMN id_employe DROP DEFAULT;
       public          postgres    false    211    210    211            g           2604    24636    user_employee id_user    DEFAULT     ~   ALTER TABLE ONLY public.user_employee ALTER COLUMN id_user SET DEFAULT nextval('public.user_employee_id_user_seq'::regclass);
 D   ALTER TABLE public.user_employee ALTER COLUMN id_user DROP DEFAULT;
       public          postgres    false    212    213    213            ?          0    24606    employee 
   TABLE DATA           ?   COPY public.employee (id_employe, address, birth_date, identification, last_names, mail, names, phone, vaccination_status, vaccination_type) FROM stdin;
    public          postgres    false    211   6       ?          0    24641    hibernate_sequences 
   TABLE DATA           F   COPY public.hibernate_sequences (sequence_name, next_val) FROM stdin;
    public          postgres    false    214   ?       ?          0    24633    user_employee 
   TABLE DATA           U   COPY public.user_employee (id_user, id_employee, password, rol, usuario) FROM stdin;
    public          postgres    false    213   ?                  0    0    employee_id_employe_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.employee_id_employe_seq', 1, false);
          public          postgres    false    210                       0    0    hibernate_sequence    SEQUENCE SET     @   SELECT pg_catalog.setval('public.hibernate_sequence', 1, true);
          public          postgres    false    209            	           0    0    user_employee_id_user_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.user_employee_id_user_seq', 1, false);
          public          postgres    false    212            i           2606    24613    employee employee_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_pkey PRIMARY KEY (id_employe);
 @   ALTER TABLE ONLY public.employee DROP CONSTRAINT employee_pkey;
       public            postgres    false    211            m           2606    24645 ,   hibernate_sequences hibernate_sequences_pkey 
   CONSTRAINT     u   ALTER TABLE ONLY public.hibernate_sequences
    ADD CONSTRAINT hibernate_sequences_pkey PRIMARY KEY (sequence_name);
 V   ALTER TABLE ONLY public.hibernate_sequences DROP CONSTRAINT hibernate_sequences_pkey;
       public            postgres    false    214            k           2606    24640     user_employee user_employee_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.user_employee
    ADD CONSTRAINT user_employee_pkey PRIMARY KEY (id_user);
 J   ALTER TABLE ONLY public.user_employee DROP CONSTRAINT user_employee_pkey;
       public            postgres    false    213            ?   ?   x?3???!CcCC3Kΐ?Ăļ?D??????̪D??̜?Ԣ???CF~Inbf?^r~.g8XN!(?)??$jZ??)??????E?U
YŐ???<??Ģ??b?	F?0#??ML??-,8???A?!?ă+????? ?<?      ?      x?KIMK,?)?46?????? +?      ?   \   x?3?4?442?tL????,.)JL?/????M-?2?4?"Y???e?i?E&(?)????Ȝ?!?Y^?el153?t?-?I??L/?????? W?#?     