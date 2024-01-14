PGDMP         )                 |            CLINIC    15.4    15.3 #    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    24634    CLINIC    DATABASE     |   CREATE DATABASE "CLINIC" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE "CLINIC";
                postgres    false            �            1259    24636    DoctorCategories    TABLE     �   CREATE TABLE public."DoctorCategories" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 &   DROP TABLE public."DoctorCategories";
       public         heap    postgres    false            �            1259    24635    DoctorCategories_id_seq    SEQUENCE     �   CREATE SEQUENCE public."DoctorCategories_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."DoctorCategories_id_seq";
       public          postgres    false    215            �           0    0    DoctorCategories_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."DoctorCategories_id_seq" OWNED BY public."DoctorCategories".id;
          public          postgres    false    214            �            1259    24643    Doctors    TABLE     C  CREATE TABLE public."Doctors" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    contact character varying(255) NOT NULL,
    experience integer NOT NULL,
    "DoctorCategory_id" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Doctors";
       public         heap    postgres    false            �            1259    24642    Doctors_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Doctors_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Doctors_id_seq";
       public          postgres    false    217            �           0    0    Doctors_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Doctors_id_seq" OWNED BY public."Doctors".id;
          public          postgres    false    216            �            1259    24657 	   Schedules    TABLE     U  CREATE TABLE public."Schedules" (
    id integer NOT NULL,
    "Room" character varying(255) NOT NULL,
    "DoctorCategory_id" integer NOT NULL,
    "Date" timestamp with time zone NOT NULL,
    "Status" character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Schedules";
       public         heap    postgres    false            �            1259    24656    Schedules_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Schedules_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."Schedules_id_seq";
       public          postgres    false    219            �           0    0    Schedules_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."Schedules_id_seq" OWNED BY public."Schedules".id;
          public          postgres    false    218            �            1259    24671    users    TABLE     '  CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255),
    password character varying(255),
    role character varying(255) DEFAULT 'USER'::character varying,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    24670    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    221            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    220                       2604    24639    DoctorCategories id    DEFAULT     ~   ALTER TABLE ONLY public."DoctorCategories" ALTER COLUMN id SET DEFAULT nextval('public."DoctorCategories_id_seq"'::regclass);
 D   ALTER TABLE public."DoctorCategories" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214    215                       2604    24646 
   Doctors id    DEFAULT     l   ALTER TABLE ONLY public."Doctors" ALTER COLUMN id SET DEFAULT nextval('public."Doctors_id_seq"'::regclass);
 ;   ALTER TABLE public."Doctors" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216    217                       2604    24660    Schedules id    DEFAULT     p   ALTER TABLE ONLY public."Schedules" ALTER COLUMN id SET DEFAULT nextval('public."Schedules_id_seq"'::regclass);
 =   ALTER TABLE public."Schedules" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218    219                       2604    24674    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220    221            �          0    24636    DoctorCategories 
   TABLE DATA           P   COPY public."DoctorCategories" (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    215   $)       �          0    24643    Doctors 
   TABLE DATA           q   COPY public."Doctors" (id, name, contact, experience, "DoctorCategory_id", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    217   �)       �          0    24657 	   Schedules 
   TABLE DATA           r   COPY public."Schedules" (id, "Room", "DoctorCategory_id", "Date", "Status", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    219   ,*       �          0    24671    users 
   TABLE DATA           T   COPY public.users (id, email, password, role, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    221   �*       �           0    0    DoctorCategories_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."DoctorCategories_id_seq"', 4, true);
          public          postgres    false    214            �           0    0    Doctors_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Doctors_id_seq"', 4, true);
          public          postgres    false    216            �           0    0    Schedules_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Schedules_id_seq"', 4, true);
          public          postgres    false    218            �           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 1, false);
          public          postgres    false    220            !           2606    24641 &   DoctorCategories DoctorCategories_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."DoctorCategories"
    ADD CONSTRAINT "DoctorCategories_pkey" PRIMARY KEY (id);
 T   ALTER TABLE ONLY public."DoctorCategories" DROP CONSTRAINT "DoctorCategories_pkey";
       public            postgres    false    215            #           2606    24650    Doctors Doctors_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Doctors"
    ADD CONSTRAINT "Doctors_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Doctors" DROP CONSTRAINT "Doctors_pkey";
       public            postgres    false    217            %           2606    24664    Schedules Schedules_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."Schedules"
    ADD CONSTRAINT "Schedules_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."Schedules" DROP CONSTRAINT "Schedules_pkey";
       public            postgres    false    219            '           2606    24681    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    221            )           2606    24679    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    221            *           2606    24651 &   Doctors Doctors_DoctorCategory_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Doctors"
    ADD CONSTRAINT "Doctors_DoctorCategory_id_fkey" FOREIGN KEY ("DoctorCategory_id") REFERENCES public."DoctorCategories"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 T   ALTER TABLE ONLY public."Doctors" DROP CONSTRAINT "Doctors_DoctorCategory_id_fkey";
       public          postgres    false    215    3105    217            +           2606    24665 *   Schedules Schedules_DoctorCategory_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Schedules"
    ADD CONSTRAINT "Schedules_DoctorCategory_id_fkey" FOREIGN KEY ("DoctorCategory_id") REFERENCES public."DoctorCategories"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 X   ALTER TABLE ONLY public."Schedules" DROP CONSTRAINT "Schedules_DoctorCategory_id_fkey";
       public          postgres    false    215    219    3105            �   _   x�3�tN,J����O��4202�50�54Q00�22�26�3030���60�/�e��Z��XB�IƜ�)��%E���d��_T��_ 4�B�b���� ��?�      �   �   x����
�0E盧�^��'1�l�S�.R��B߾������..c�K�C����7��\�����bg�z�^����/$G#�4��_�64ީ��Od��\�y���{N�`=u����c��w�����>jc�$�H<      �   s   x�3����U0�4�4202�50�54U00�#m#N�������	H�����B��������,���2�B3K�3s�rR)��b�1�g̩��%&���4�L� ;T(      �      x������ � �     