# Simple Makefile for a Node project

# Detect OS
ifeq ($(OS),Windows_NT)
    DETECTED_OS := Windows
else
    DETECTED_OS := $(shell uname)
endif

# Run the application
run:
	@npm run start

# Build Docker Image
docker-build:
ifeq ($(DETECTED_OS),Windows)
	@echo "Building Windows..."	
	@wsl docker build -t node-api-rest .
else
	@echo "Building Bash..."	
	@docker build -t node-api-rest .
endif

# Create DB container
docker-run:
ifeq ($(DETECTED_OS),Windows)
	@echo "Running Windows..."	
	@wsl docker compose up --build
else
	@echo "Running Bash..."	
	@docker compose up --build
endif

# Shutdown DB container
docker-down:
ifeq ($(DETECTED_OS),Windows)
	@echo "Stopping Windows..."	
	@wsl docker-compose down
else
	@echo "Stopping Bash..."	
	@docker-compose down
endif

.PHONY: run docker-build docker-run docker-down
