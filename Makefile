build: 
	@npx lerna run build
	@docker build -t k2-designer:dev .

dev:
	@K2_INVENTORY=/Users/krux/repos/krux.lan/apps/k-machines npm run dev

run: build
	@docker run -it -e K2_INVENTORY=/data -e PORT=21300 -v /home/krux/repos/krux.lan/apps/k-seed-at-krux-dot-fr:/data -p 21300:21300 k2-designer:dev

enter: 
	@docker run -it  k2-designer:dev sh
