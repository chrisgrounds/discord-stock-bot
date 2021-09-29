import fetch from 'node-fetch';

class TickerGenerator {
	constructor(url) {
		this.url = url;
		this.quote = this.get();
		console.log(this.quote);
	}

	async get() {
		const response = await fetch(this.url);
		return response.json().quoteSummary?.result[0]?.price;
	}

	get quote() {
		return this.quote;
	}

	set quote(data) {
		this.quote = data;
	}

	get marketState() {
		return this.quote.marketState.includes('POST') ? 'post' : this.quote.marketState.toLowerCase();
	}

	get price() {
		return this.quote[`${this.marketState}MarketPrice`];
	}

	get change() {
		return this.quote[`${this.marketState}MarketChange`];
	}

	get changePercent() {
		return this.quote[`${this.marketState}MarketChangePercent`];
	}

	get decorator() {
		let q = this.quote;

		if (q[`${q.marketState}MarketChangePercent`]?.raw >= 0 && result[`${q.marketState}MarketChangePercent`]?.raw < 0.05) {
			return '↗';
		} else if (q[`${result.marketState}MarketChangePercent`]?.raw > 0.05) {
			return '🚀';
		} else {
			return '↘';
		}
	}

	get color() {
		return this.quote[`${result.marketState}MarketChangePercent`]?.raw > 0 ? 'green' : 'red';
	}

}

export default TickerGenerator;
