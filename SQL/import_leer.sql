-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 16. Mrz 2022 um 13:27
-- Server-Version: 10.4.21-MariaDB
-- PHP-Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `teilkostenrechnung_aufgaben`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `tkr_einzel`
--

CREATE TABLE `tkr_einzel` (
  `Produktnummer` int(10) UNSIGNED NOT NULL,
  `Aufgabennummer` int(10) UNSIGNED DEFAULT NULL,
  `e` decimal(20,2) DEFAULT NULL,
  `vk` decimal(20,2) DEFAULT NULL,
  `db` decimal(20,2) DEFAULT NULL,
  `anzahl` int(10) UNSIGNED DEFAULT NULL,
  `db_produkt` decimal(20,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `tkr_einzel`
--

-- Gibt es nur in import_voll.sql

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `tkr_gesamt`
--

CREATE TABLE `tkr_gesamt` (
  `Aufgabennummer` int(10) UNSIGNED NOT NULL,
  `DB` decimal(20,2) DEFAULT NULL,
  `FK` decimal(20,2) DEFAULT NULL,
  `BE` decimal(20,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `tkr_gesamt`
--

-- Gibt es nur in import_voll.sql

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `tkr_einzel`
--
ALTER TABLE `tkr_einzel`
  ADD PRIMARY KEY (`Produktnummer`),
  ADD KEY `FOREIGN` (`Aufgabennummer`);

--
-- Indizes für die Tabelle `tkr_gesamt`
--
ALTER TABLE `tkr_gesamt`
  ADD PRIMARY KEY (`Aufgabennummer`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `tkr_einzel`
--
ALTER TABLE `tkr_einzel`
  MODIFY `Produktnummer` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT für Tabelle `tkr_gesamt`
--
ALTER TABLE `tkr_gesamt`
  MODIFY `Aufgabennummer` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `tkr_einzel`
--
ALTER TABLE `tkr_einzel`
  ADD CONSTRAINT `tkr_einzel_ibfk_1` FOREIGN KEY (`Aufgabennummer`) REFERENCES `tkr_gesamt` (`Aufgabennummer`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
