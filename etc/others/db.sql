-- MariaDB dump 10.19  Distrib 10.4.25-MariaDB, for Win64 (AMD64)
--
-- Host: versodiario.com.br    Database: versodiario
-- ------------------------------------------------------
-- Server version	8.0.31-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `daily_devocional_timer`
--

DROP TABLE IF EXISTS `daily_devocional_timer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `daily_devocional_timer` (
  `daily_devocional` int NOT NULL,
  `last_change` datetime NOT NULL,
  `date_to_change` date DEFAULT NULL,
  KEY `daily_devocional` (`daily_devocional`),
  CONSTRAINT `daily_devocional_timer_ibfk_1` FOREIGN KEY (`daily_devocional`) REFERENCES `devocional` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daily_devocional_timer`
--

LOCK TABLES `daily_devocional_timer` WRITE;
/*!40000 ALTER TABLE `daily_devocional_timer` DISABLE KEYS */;
INSERT INTO `daily_devocional_timer` VALUES (1,'2022-11-27 19:31:21','2022-11-27');
/*!40000 ALTER TABLE `daily_devocional_timer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `daily_verse`
--

DROP TABLE IF EXISTS `daily_verse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `daily_verse` (
  `id` int NOT NULL AUTO_INCREMENT,
  `abbrev` varchar(10) NOT NULL,
  `chapter` tinyint NOT NULL,
  `number` tinyint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `abbrev` (`abbrev`,`chapter`,`number`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daily_verse`
--

LOCK TABLES `daily_verse` WRITE;
/*!40000 ALTER TABLE `daily_verse` DISABLE KEYS */;
INSERT INTO `daily_verse` VALUES (4,'1co',13,4),(31,'1pe',5,7),(12,'1ts',5,18),(7,'2cr',7,14),(8,'2tm',4,7),(17,'ex',20,12),(29,'fp',4,6),(9,'fp',4,13),(5,'is',41,10),(13,'jo',3,16),(23,'jo',8,32),(14,'jo',14,6),(6,'jr',29,11),(10,'mt',6,33),(25,'mt',6,34),(27,'mt',11,28),(32,'mt',17,20),(21,'mt',18,21),(11,'mt',19,14),(34,'mt',24,12),(33,'nm',23,19),(28,'os',4,6),(76,'pv',1,7),(75,'pv',8,13),(73,'pv',10,9),(74,'pv',11,17),(30,'pv',14,1),(19,'pv',16,3),(77,'pv',17,17),(15,'pv',18,24),(78,'pv',22,4),(79,'pv',24,16),(20,'rm',8,28),(16,'rm',12,2),(22,'sl',17,8),(26,'sl',23,4),(24,'sl',37,5),(18,'sl',127,3);
/*!40000 ALTER TABLE `daily_verse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `daily_verse_timer`
--

DROP TABLE IF EXISTS `daily_verse_timer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `daily_verse_timer` (
  `daily_verse` int NOT NULL,
  `last_change` datetime DEFAULT NULL,
  `hr_to_change` smallint DEFAULT NULL,
  KEY `daily_verse` (`daily_verse`),
  CONSTRAINT `daily_verse_timer_ibfk_1` FOREIGN KEY (`daily_verse`) REFERENCES `daily_verse` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daily_verse_timer`
--

LOCK TABLES `daily_verse_timer` WRITE;
/*!40000 ALTER TABLE `daily_verse_timer` DISABLE KEYS */;
INSERT INTO `daily_verse_timer` VALUES (28,'2022-12-08 06:00:00',6);
/*!40000 ALTER TABLE `daily_verse_timer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `devocional`
--

DROP TABLE IF EXISTS `devocional`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `devocional` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `summary` varchar(1000) NOT NULL,
  `text` varchar(5000) NOT NULL,
  `autor` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `autor` (`autor`),
  CONSTRAINT `devocional_ibfk_1` FOREIGN KEY (`autor`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `devocional`
--

LOCK TABLES `devocional` WRITE;
/*!40000 ALTER TABLE `devocional` DISABLE KEYS */;
INSERT INTO `devocional` VALUES (1,'Titulo','Sumario','texto',1),(2,'t2','s2','t3',1);
/*!40000 ALTER TABLE `devocional` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `getDailyVerse`
--

DROP TABLE IF EXISTS `getDailyVerse`;
/*!50001 DROP VIEW IF EXISTS `getDailyVerse`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `getDailyVerse` (
  `id` tinyint NOT NULL,
  `abbrev` tinyint NOT NULL,
  `chapter` tinyint NOT NULL,
  `number` tinyint NOT NULL,
  `daily_verse` tinyint NOT NULL,
  `last_change` tinyint NOT NULL,
  `hr_to_change` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `getdailyverse`
--

DROP TABLE IF EXISTS `getdailyverse`;
/*!50001 DROP VIEW IF EXISTS `getdailyverse`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `getdailyverse` (
  `id` tinyint NOT NULL,
  `abbrev` tinyint NOT NULL,
  `chapter` tinyint NOT NULL,
  `number` tinyint NOT NULL,
  `daily_verse` tinyint NOT NULL,
  `last_change` tinyint NOT NULL,
  `hr_to_change` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(400) NOT NULL,
  `password` varchar(400) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Gabriel','123');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video`
--

DROP TABLE IF EXISTS `video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `video` (
  `url` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video`
--

LOCK TABLES `video` WRITE;
/*!40000 ALTER TABLE `video` DISABLE KEYS */;
INSERT INTO `video` VALUES ('https://www.youtube.com/embed/amSayGJDN28');
/*!40000 ALTER TABLE `video` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `getDailyVerse`
--

/*!50001 DROP TABLE IF EXISTS `getDailyVerse`*/;
/*!50001 DROP VIEW IF EXISTS `getDailyVerse`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `getDailyVerse` AS select `daily_verse`.`id` AS `id`,`daily_verse`.`abbrev` AS `abbrev`,`daily_verse`.`chapter` AS `chapter`,`daily_verse`.`number` AS `number`,`daily_verse_timer`.`daily_verse` AS `daily_verse`,`daily_verse_timer`.`last_change` AS `last_change`,`daily_verse_timer`.`hr_to_change` AS `hr_to_change` from (`daily_verse` join `daily_verse_timer` on((`daily_verse_timer`.`daily_verse` = `daily_verse`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `getdailyverse`
--

/*!50001 DROP TABLE IF EXISTS `getdailyverse`*/;
/*!50001 DROP VIEW IF EXISTS `getdailyverse`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `getdailyverse` AS select `daily_verse`.`id` AS `id`,`daily_verse`.`abbrev` AS `abbrev`,`daily_verse`.`chapter` AS `chapter`,`daily_verse`.`number` AS `number`,`daily_verse_timer`.`daily_verse` AS `daily_verse`,`daily_verse_timer`.`last_change` AS `last_change`,`daily_verse_timer`.`hr_to_change` AS `hr_to_change` from (`daily_verse` join `daily_verse_timer` on((`daily_verse`.`id` = `daily_verse_timer`.`daily_verse`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-08 21:09:34
