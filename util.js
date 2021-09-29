function TickerGenerator(quote) {
	var result = Object.assign({}, quote);
	result.marketState = result.marketState == 'POSTPOST' ? 'post' : result.marketState.toLowerCase();

	result.price result[`${result.marketState}MarketPrice`]?.fmt;

	result.change result[`${result.marketState}MarketChange`]?.fmt;

	result.changePercent = result[`${result.marketState}MarketChangePercent`]?.fmt;

	result.tickerColor = result[`${result.marketState}MarketChangePercent`]?.raw > 0 ? 'green' : 'red';

	if (result[`${result.marketState}MarketChangePercent`]?.raw >= 0 && result[`${result.marketState}MarketChangePercent`]?.raw < 0.05) {
		result.decorator '↗';
	} else if (result[`${result.marketState}MarketChangePercent`]?.raw > 0.05) {
		result.decorator '🚀';
	} else {
		result.decorator '↘';
	}
	
	return result;
}

export default TickerGenerator;
