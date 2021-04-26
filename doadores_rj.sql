-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 11-Abr-2021 às 12:59
-- Versão do servidor: 10.4.17-MariaDB
-- versão do PHP: 7.4.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `doadores_rj`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `accesses`
--

CREATE TABLE `accesses` (
  `id` int(11) NOT NULL,
  `fk_tables_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `accesses`
--

INSERT INTO `accesses` (`id`, `fk_tables_id`, `created_at`, `updated_at`) VALUES
(1, 'c2901eae-5c99-4f0a-8fa0-480a2fbb6f7b', '2021-04-02 14:00:48', '2021-04-02 14:00:48'),
(2, '90976d94-408c-49b6-91f2-a00614c7f9bb', '2021-04-02 14:03:05', '2021-04-02 14:03:05'),
(3, 'eefa161a-7b48-4881-86e6-64bc735cd620', '2021-04-02 14:13:42', '2021-04-02 14:13:42'),
(4, '45c80d13-9b89-40db-81a6-dac5e4106984', '2021-04-02 14:28:05', '2021-04-02 14:28:05'),
(5, '5', '2021-04-02 14:40:34', '2021-04-02 14:40:34');

-- --------------------------------------------------------

--
-- Estrutura da tabela `accesss`
--

CREATE TABLE `accesss` (
  `id` int(11) NOT NULL,
  `fk_tables_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `admingenerals`
--

CREATE TABLE `admingenerals` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `cpf` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `level` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `admingenerals`
--

INSERT INTO `admingenerals` (`id`, `cpf`, `name`, `email`, `level`, `created_at`, `updated_at`) VALUES
('', '111111111', 'Admin geral', 'admingeral@gmail.com', 1, '2021-04-02 16:32:04', '2021-04-02 16:32:04'),
('01b23c0a-14e7-4380-a582-1cfb9e97e2b5', '000000000', 'Admin geral', 'admingeral@gmail.com', 1, '2021-04-02 16:42:32', '2021-04-02 16:42:32');

-- --------------------------------------------------------

--
-- Estrutura da tabela `admininstituts`
--

CREATE TABLE `admininstituts` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `fk_institut` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `cpf` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `level` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `admininstituts`
--

INSERT INTO `admininstituts` (`id`, `fk_institut`, `cpf`, `name`, `email`, `level`, `created_at`, `updated_at`) VALUES
('7199851e-7838-4b3e-8239-f089941fd4be', 'a150ed87-9aa1-4884-acbe-49808c5fb756', '00011111', 'Admin institut', 'adminisntitut@gmail.com', 2, '2021-04-02 19:58:11', '2021-04-02 19:58:11'),
('948f28f8-13e7-4f35-a32a-b831b1c1cb82', 'a150ed87-9aa1-4884-acbe-49808c5fb756', '000000000', 'Admin geral', 'admingeral@gmail.com', 1, '2021-04-02 19:32:05', '2021-04-02 19:32:05');

-- --------------------------------------------------------

--
-- Estrutura da tabela `adress`
--

CREATE TABLE `adress` (
  `id` int(11) NOT NULL,
  `zip_code` int(11) NOT NULL,
  `city` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL,
  `number` int(11) NOT NULL,
  `complement` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `adresses`
--

CREATE TABLE `adresses` (
  `id` int(11) NOT NULL,
  `fk_tables_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `zip_code` int(11) NOT NULL,
  `city` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL,
  `number` int(11) NOT NULL,
  `complement` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `adresses`
--

INSERT INTO `adresses` (`id`, `fk_tables_id`, `zip_code`, `city`, `street`, `number`, `complement`, `created_at`, `updated_at`) VALUES
(1, 'c2901eae-5c99-4f0a-8fa0-480a2fbb6f7b', 77, 'Rio de janeiro', 'Almirante vasconcelos', 478, 'apto 704', '2021-04-02 14:00:48', '2021-04-02 14:00:48'),
(2, '90976d94-408c-49b6-91f2-a00614c7f9bb', 77, 'Rio de janeiro', 'Almirante vasconcelos', 4785, 'apto 704', '2021-04-02 14:03:05', '2021-04-02 14:03:05'),
(3, 'eefa161a-7b48-4881-86e6-64bc735cd620', 77, 'Rio de janeiro', 'Almirante vasconcelos', 4785, 'apto 704', '2021-04-02 14:13:42', '2021-04-02 14:13:42'),
(4, '45c80d13-9b89-40db-81a6-dac5e4106984', 66, 'Rio de janeiro', 'Coronel vasconcelos', 85, 'apto 784', '2021-04-02 14:28:05', '2021-04-02 14:28:05'),
(5, '5', 66, 'Rio de janeiro', 'Coronel vasconcelos', 85, 'apto 784', '2021-04-02 14:40:34', '2021-04-02 14:40:34'),
(6, '', 66, 'Rio de janeiro', 'Almirante alexandrino', 412, 'casa 9', '2021-04-02 16:32:04', '2021-04-02 16:32:04'),
(7, '01b23c0a-14e7-4380-a582-1cfb9e97e2b5', 66, 'Rio de janeiro', 'Almirante alexandrino', 412, 'casa 9', '2021-04-02 16:42:32', '2021-04-02 16:42:32'),
(8, 'a150ed87-9aa1-4884-acbe-49808c5fb756', 22, 'Rio de janeiro', 'Almirante vasconcelos', 4095, '', '2021-04-02 19:26:19', '2021-04-02 19:26:19'),
(9, '948f28f8-13e7-4f35-a32a-b831b1c1cb82', 66, 'Rio de janeiro', 'Almirante alexandrino', 412, 'casa 9', '2021-04-02 19:32:05', '2021-04-02 19:32:05'),
(10, '7199851e-7838-4b3e-8239-f089941fd4be', 66, 'Rio de janeiro', 'Almirante alexandrino', 415, 'casa 9', '2021-04-02 19:58:11', '2021-04-02 19:58:11'),
(11, '5869282b-c1b0-4a92-b1f6-ad684f65fbd3', 22, 'Rio de janeiro', 'Almirante vasconcelos', 4095, '', '2021-04-10 10:10:09', '2021-04-10 10:10:09'),
(12, '9bf0280e-c408-4989-a59f-9eacee699ffe', 0, 'Rio de Janeiro', 'Everaldo da Costa', 2147483647, 'apto 708', '2021-04-10 13:32:18', '2021-04-10 13:32:18'),
(13, '0a0947d3-0b60-4c4a-a331-f59b6ba8f91f', 0, 'Rio de janeiro', 'Clementino Vargas', 654, 'apto 789', '2021-04-10 15:12:03', '2021-04-10 15:12:03'),
(14, '9e0265bd-3ab3-4384-af4d-75c01cd29de3', 0, '', 'Everaldo da Costa', 2147483647, 'apto 708', '2021-04-10 16:40:38', '2021-04-10 16:40:38'),
(15, 'fb029c78-3208-4087-be87-9d337f600b4c', 0, 'Rio de Janeiro', 'Everaldo da Costa', 2147483647, 'apto 708', '2021-04-10 16:54:04', '2021-04-10 16:54:04'),
(16, '3395abfb-3445-4bcb-9c3e-5c47157e3eda', 0, 'Rio de Janeiro', 'Everaldo da Costa', 2147483647, 'apto 708', '2021-04-10 17:04:26', '2021-04-10 17:04:26'),
(17, '84933639-a7c5-4b23-9f2d-43dc4dd7516e', 0, 'Rio de Janeiro', 'Everaldo da Costa', 2147483647, 'apto 708', '2021-04-10 17:40:16', '2021-04-10 17:40:16'),
(18, 'ba4c7c97-d5b2-4fc3-afa6-e9a55c9bdeb5', 0, 'Rio de Janeiro', 'Everaldo da Costa', 2147483647, 'apto 789', '2021-04-10 17:57:21', '2021-04-10 17:57:21'),
(19, 'bb74aa3f-47d9-42d3-af0a-1fefe1a764c8', 0, 'Rio de Janeiro', 'Everaldo da Costa', 2147483647, 'apto 708', '2021-04-10 21:22:58', '2021-04-10 21:22:58'),
(20, 'f3fe76a3-372e-412f-b394-93b0c8c9e21b', 0, 'Rio de Janeiro', 'Everaldo da Costa', 2147483647, 'apto 708', '2021-04-10 21:24:04', '2021-04-10 21:24:04');

-- --------------------------------------------------------

--
-- Estrutura da tabela `donors`
--

CREATE TABLE `donors` (
  `id` int(11) NOT NULL,
  `fk_institut` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `fk_representative` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `value` float NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `instituts`
--

CREATE TABLE `instituts` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `cnpj` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `phones`
--

CREATE TABLE `phones` (
  `id` int(11) NOT NULL,
  `fk_tables_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `residential_phone` varchar(255) NOT NULL,
  `celphone_1` varchar(255) NOT NULL,
  `celphone_2` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `phones`
--

INSERT INTO `phones` (`id`, `fk_tables_id`, `residential_phone`, `celphone_1`, `celphone_2`, `created_at`, `updated_at`) VALUES
(1, 'c2901eae-5c99-4f0a-8fa0-480a2fbb6f7b', '3322667909', '559995555', '5577888888', '2021-04-02 14:00:48', '2021-04-02 14:00:48'),
(2, '90976d94-408c-49b6-91f2-a00614c7f9bb', '3322667909', '559995555', '5577888888', '2021-04-02 14:03:05', '2021-04-02 14:03:05'),
(3, 'eefa161a-7b48-4881-86e6-64bc735cd620', '3322667909', '559995555', '5577888888', '2021-04-02 14:13:42', '2021-04-02 14:13:42'),
(4, '45c80d13-9b89-40db-81a6-dac5e4106984', '66622667909', '99995555', '55773333888', '2021-04-02 14:28:05', '2021-04-02 14:28:05'),
(5, '5', '66622667909', '99995555', '55773333888', '2021-04-02 14:40:34', '2021-04-02 14:40:34'),
(6, '', '99990000', '99990000', '999999999999', '2021-04-02 16:32:04', '2021-04-02 16:32:04'),
(7, '01b23c0a-14e7-4380-a582-1cfb9e97e2b5', '99990000', '99990000', '999999999999', '2021-04-02 16:42:32', '2021-04-02 16:42:32'),
(8, 'a150ed87-9aa1-4884-acbe-49808c5fb756', '222266799', '999995555', '7777888888', '2021-04-02 19:26:19', '2021-04-02 19:26:19'),
(9, '948f28f8-13e7-4f35-a32a-b831b1c1cb82', '99990000', '99990000', '999999999999', '2021-04-02 19:32:05', '2021-04-02 19:32:05'),
(10, '7199851e-7838-4b3e-8239-f089941fd4be', '99990000', '99990000', '999999999999', '2021-04-02 19:58:11', '2021-04-02 19:58:11'),
(11, '5869282b-c1b0-4a92-b1f6-ad684f65fbd3', '222266799', '999995555', '7777888888', '2021-04-10 10:10:09', '2021-04-10 10:10:09'),
(12, '9bf0280e-c408-4989-a59f-9eacee699ffe', '', '987898000', '', '2021-04-10 13:32:18', '2021-04-10 13:32:18'),
(13, '0a0947d3-0b60-4c4a-a331-f59b6ba8f91f', '', '788787878787', '9989898989898', '2021-04-10 15:12:03', '2021-04-10 15:12:03'),
(14, '9e0265bd-3ab3-4384-af4d-75c01cd29de3', '', '987898000', '990988998778', '2021-04-10 16:40:38', '2021-04-10 16:40:38'),
(15, 'fb029c78-3208-4087-be87-9d337f600b4c', '', '987898000', '990988998778', '2021-04-10 16:54:04', '2021-04-10 16:54:04'),
(16, '3395abfb-3445-4bcb-9c3e-5c47157e3eda', '', '987898000', '990988998778', '2021-04-10 17:04:26', '2021-04-10 17:04:26'),
(17, '84933639-a7c5-4b23-9f2d-43dc4dd7516e', '', '987898000', '990988998778', '2021-04-10 17:40:16', '2021-04-10 17:40:16'),
(18, 'ba4c7c97-d5b2-4fc3-afa6-e9a55c9bdeb5', '', '987898000', '990988998778', '2021-04-10 17:57:21', '2021-04-10 17:57:21'),
(19, 'bb74aa3f-47d9-42d3-af0a-1fefe1a764c8', '', '987898000', '990988998778', '2021-04-10 21:22:58', '2021-04-10 21:22:58'),
(20, 'f3fe76a3-372e-412f-b394-93b0c8c9e21b', '', '987898000', '990988998778', '2021-04-10 21:24:04', '2021-04-10 21:24:04');

-- --------------------------------------------------------

--
-- Estrutura da tabela `representatives`
--

CREATE TABLE `representatives` (
  `id` int(11) NOT NULL,
  `fk_institut` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `cpf` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `representatives`
--

INSERT INTO `representatives` (`id`, `fk_institut`, `name`, `email`, `cpf`, `created_at`, `updated_at`) VALUES
(2, '', 'Ronaldo Cavelcanti', 'teste96@gmail.com', '887700999888', '2021-04-02 14:03:05', '2021-04-02 14:03:05'),
(3, '265323cf-b4b2-4608-9afd-4a61db574a70', 'Ronaldo Cavelcanti', 'teste96@gmail.com', '8877009990008', '2021-04-02 14:13:42', '2021-04-02 14:13:42'),
(4, '265323cf-b4b2-4608-9afd-4a61db574a70', 'Romildo Barros', 'teste96@gmail.com', '8877777790008', '2021-04-02 14:28:04', '2021-04-02 14:28:04'),
(5, '265323cf-b4b2-4608-9afd-4a61db574a70', 'Romildo Barros', 'teste96@gmail.com', '2323237790008', '2021-04-02 14:40:34', '2021-04-02 14:40:34');

-- --------------------------------------------------------

--
-- Estrutura da tabela `representativies`
--

CREATE TABLE `representativies` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `cpf` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20210325190550-create_instituts.js'),
('20210325214102-create_representative.js'),
('20210328135727-create_adress.js'),
('20210329102827-create_donor.js'),
('20210401110014-create_phones.js'),
('20210401145429-create_admin_general.js'),
('20210401151142-create_admin_institut.js'),
('20210401171506-create_accesss.js');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `accesses`
--
ALTER TABLE `accesses`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `accesss`
--
ALTER TABLE `accesss`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `admingenerals`
--
ALTER TABLE `admingenerals`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `admininstituts`
--
ALTER TABLE `admininstituts`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `adress`
--
ALTER TABLE `adress`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `adresses`
--
ALTER TABLE `adresses`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `donors`
--
ALTER TABLE `donors`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `instituts`
--
ALTER TABLE `instituts`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `phones`
--
ALTER TABLE `phones`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `representatives`
--
ALTER TABLE `representatives`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `representativies`
--
ALTER TABLE `representativies`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `accesses`
--
ALTER TABLE `accesses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `accesss`
--
ALTER TABLE `accesss`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `adress`
--
ALTER TABLE `adress`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `adresses`
--
ALTER TABLE `adresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de tabela `donors`
--
ALTER TABLE `donors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `phones`
--
ALTER TABLE `phones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de tabela `representatives`
--
ALTER TABLE `representatives`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `representativies`
--
ALTER TABLE `representativies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
