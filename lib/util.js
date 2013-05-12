/* J. C. Siebeneichler, December 2012.
*/


/** Returns a word with {{l}} */
function ll(s) {
	return lll(s, l);
}

function lll(s, lang) {
	var type = "|";
	if (has_efficient_l(lang)) type = "/";
	return "{{l" + type + lang + "|" + clean_word(s) + "}}";
}


function has_efficient_l(lang) {
	return (lang == "be" || lang == "bg" || lang == "br" || lang == "ca" ||
		lang == "cs" || lang == "csb" || lang == "cy" || lang == "de" ||
		lang == "dsb" || lang == "en" || lang == "es" || lang == "fr" ||
		lang == "frm" || lang == "fro" || lang == "ga" || lang == "gd" ||
		lang == "got" || lang == "grc" || lang == "gv" || lang == "hsb" ||
		lang == "kw" || lang == "mk" || lang == "my" || lang == "nb" ||
		lang == "nl" || lang == "nn" || lang == "oc" || lang == "pl" ||
		lang == "pt" || lang == "ru" || lang == "rue" || lang == "sga" ||
		lang == "sk" || lang == "sl" || lang == "tr" || lang == "uk");
}

function del_right_spaces(s) {
	return s.replace(/\s+$/, "");
}

/** Turns full stops into spaces and removes trailing right spaces. */
function clean_word(s) {
	s = s.replace(/\./g, " ");
	s = del_right_spaces(s);
	return s;
}

function clean_words(s) {
	for (var c1 = 0; c1 < s.length; c1++) s[c1] = clean_word(s[c1]);
	return s;
}

function replace_commands(values, keys, replace_with) {
	for (var c1 = 0; c1 < values.length; c1++) {
		for (var c2 = 0; c2 < keys.length; c2++) {
			if (values[c1] == keys[c2]) {
				values[c1] = replace_with[c2];
				continue;
			}
		}
	}
	return values;
}

function is_comm(s) {
	return s.charAt(0) == ".";
}

function is_vowel(s) {
	return (s == "a" || s == "e" || s == "i" || s == "o" || s == "u");
}

/** Is punctuation mark? */
function is_pmark(s) {
	return (s == "!" || s == "," || s == "." || s == ":" || s == "“" ||
			s == "”" || s == "\""|| s == "'" || s == "’" || s == "‘" ||
			s == "?" || s == "¡" || s == "¿" || s == "<" || s == ">" ||
			s == "(" || s == ")" || s == "[" || s == "]" || s == "{" ||
			s == "}" || s == ";");
}
