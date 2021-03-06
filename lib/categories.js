/** J. C. Siebeneichler, January 2013. */


/**
.t: Topic mode (default)
.s: Suffix mode;
.p: Prefix mode;
.n: Normal mode.
*/
function categories(s) {
	var ss = "";
	var mode = ".t";
	for (var c1 = 0; c1 < s.length; c1++) {
		if (is_comm(s[c1])) mode = s[c1];
		else {
			s[c1] = clean_word(s[c1]);
			ss += "[[Category:";
			switch (mode) {
			case ".t": ss += l + ":" + s[c1]; break;
			case ".s": case ".p":
				ss += lang_name(l) + " words " 
					+ (mode == ".s"? "suffix" : "prefix") + "ed with "
					+ s[c1];
				break;
			case ".n":
			default: ss += s[c1];
			}
			ss += "]]";
			if (c1 < s.length-1) ss += "\n";
		}
	}
	return ss;
}
