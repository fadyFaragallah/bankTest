const API_KEY = '26ad1d306ef1e683660a2140bc88806a';

export const Currencies = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTC", "BTN", "BWP", "BYN", "BYR", "BZD", "CAD", "CDF", "CHF", "CLF", "CLP", "CNY", "COP", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LTL", "LVL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR","ZWL", "ZMW", "ZMK", "ZAR", "YER", "XPF", "XOF", "XDR", "XCD", "XAU", "XAG", "XAF", "WST", "VUV", "VND", "VEF", "UZS", "UYU", "USD", "UGX", "UAH", "TZS", "TWD", "TTD", "TRY", "TOP", "TND", "TMT", "TJS", "THB", "SZL", "SYP", "SVC", "STD", "SRD", "SOS", "SLL", "SHP", "SGD", "SEK", "SDG", "SCR", "SBD", "SAR", "RWF", "RUB", "RSD", "RON", "QAR", "PYG", "PLN", "PKR", "PHP", "PGK", "PEN", "PAB", "OMR", "NZD", "NPR", "NOK", "NIO", "NGN", "NAD", "MZN", "MYR", "MXN", "MWK", "MVR"];
export async function reqAmount(to){
	const response = await fetch(`http://data.fixer.io/api/latest?access_key=${API_KEY}`);
	const result = await response.json()
	return result['rates'][to];
}

