-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Especialidad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Especialidad` (
  `idEspecialidad` BIGINT(50) NOT NULL AUTO_INCREMENT,
  `Area_especialidad` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idEspecialidad`),
  UNIQUE INDEX `Area_especialidad_UNIQUE` (`Area_especialidad` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Medico`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Medico` (
  `idMedico` BIGINT(50) NOT NULL AUTO_INCREMENT,
  `foto` VARCHAR(45) NOT NULL,
  `idesp` BIGINT(50) NOT NULL,
  `Nombre` VARCHAR(45) NOT NULL,
  `Apellido` VARCHAR(45) NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `Password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idMedico`),
  INDEX `id_esp_idx` (`idesp` ASC) VISIBLE,
  UNIQUE INDEX `Email_UNIQUE` (`Email` ASC) VISIBLE,
  UNIQUE INDEX `Password_UNIQUE` (`Password` ASC) VISIBLE,
  CONSTRAINT `id_esp`
    FOREIGN KEY (`idesp`)
    REFERENCES `mydb`.`Especialidad` (`idEspecialidad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Paciente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Paciente` (
  `idPaciente` BIGINT(50) NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NOT NULL,
  `Apellido` VARCHAR(45) NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `Password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idPaciente`),
  UNIQUE INDEX `Email_UNIQUE` (`Email` ASC) VISIBLE,
  UNIQUE INDEX `Password_UNIQUE` (`Password` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Disponibilidad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Disponibilidad` (
  `iddisponibilidad` BIGINT(50) NOT NULL AUTO_INCREMENT,
  `idmedico` BIGINT(50) NOT NULL,
  `Fecha` VARCHAR(45) NOT NULL,
  `Ubicacion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`iddisponibilidad`),
  INDEX `idmedico_idx` (`idmedico` ASC) VISIBLE,
  CONSTRAINT `idmedico`
    FOREIGN KEY (`idmedico`)
    REFERENCES `mydb`.`Medico` (`idMedico`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Turno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Turno` (
  `idTurno` BIGINT(50) NOT NULL AUTO_INCREMENT,
  `estado` VARCHAR(45) NOT NULL,
  `idpaciente` BIGINT(50) NOT NULL,
  `horarios` VARCHAR(45) NOT NULL,
  `iddisp` BIGINT(50) NOT NULL,
  `motivo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idTurno`),
  INDEX `idpaciente_idx` (`idpaciente` ASC) VISIBLE,
  INDEX `idmedico_idx` (`iddisp` ASC) VISIBLE,
  CONSTRAINT `idpaciente`
    FOREIGN KEY (`idpaciente`)
    REFERENCES `mydb`.`Paciente` (`idPaciente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `iddisp`
    FOREIGN KEY (`iddisp`)
    REFERENCES `mydb`.`Disponibilidad` (`iddisponibilidad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Receta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Receta` (
  `idReceta` BIGINT(50) NOT NULL AUTO_INCREMENT,
  `fecha_hora` VARCHAR(45) NOT NULL,
  `turno_fk` BIGINT(50) NOT NULL,
  PRIMARY KEY (`idReceta`),
  INDEX `idturno_fk_idx` (`turno_fk` ASC) VISIBLE,
  CONSTRAINT `idturno_fk`
    FOREIGN KEY (`turno_fk`)
    REFERENCES `mydb`.`Turno` (`idTurno`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
