build: 
	@npx lerna run build
	@docker build -t k2-designer:dev .

run: build
	@docker run -it -p 8080:2021 k2-designer:dev

enter: 
	@docker run -it  k2-designer:dev sh
