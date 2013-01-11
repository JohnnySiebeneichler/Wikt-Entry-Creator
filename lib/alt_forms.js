/** J. C. Siebeneichler, December 2012.
*/

function alt_forms(s) {
	
	s = replace_commands(s, [".o", ".d", ".a", ".r", ".br", ".pt", ".af", ".uk",
							 ".us", ".can"], ["obsolete", "dated", "archaic",
							 "rare", "Brazil", "Portugal", "Africa",
							 "United Kingdom", "United States", "Canada"]);
	return  "===Alternative forms===\n" +
			comma_list(s, "qualifier",  true, "", false) +
			"\n\n";
}
