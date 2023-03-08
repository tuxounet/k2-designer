build: 
	@npx lerna run build
	@docker build -t k2-designer:dev .

run: build
	@docker run -it k2-designer:dev
	