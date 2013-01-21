/** J. C. Siebeneichler, January 2013.
Part of speech heading, headword line and conjugation heading. */


function get_pos_heading(s) {
	pos = s[0];
	
	var ss = "===";
	
	switch (pos) {
	case "n": ss += "Noun"; break;
	case "v": ss += "Verb"; break;
	case "a": ss += "Adjective"; break;
	case "p": ss += "Proper noun"; break;
	case "c": ss += "Conjunction"; break;
	case "i": ss += "Interjection"; break;
	case "pn": ss += "Pronoun"; break;
	case "co": ss += "Contraction"; break;
	case "ad": ss += "Adverb"; break;
	case "pr": ss += "Preposition"; break;
	case "ar": ss += "Article"; break;
	case "pf": ss += "Prefix"; break;
	case "sf": ss += "Suffix"; break;
	case "id": ss += "Idiom"; break;
	case "ac": ss += "{{acronym}}"; break;
	case "ab": ss += "{{abbreviation}}"; break;
	case "sy": ss += "Symbol"; break;
	case "le": ss += "Letter"; break;
	case "nm": ss += "Numeral"; break;
	case "di": ss += "Diacritical mark"; break;
	case "vf": ss += "Verb"; break;
	case "af": ss += "Adjective"; break;
	case "nf": ss += "Noun"; break;
	case "pb": ss += "Proverb"; break;
	case "ph": ss += "Phrase"; break;
	default: ss += pos;
	}
	return ss + "===\n";
}

function headline(s) {
	var ss = "{{";
	var c1 = 0;
	if (s[0] == ".a") {
		ss += get_head_function();
		ss += get_conj_parameters();
		ss += make_head_alt();
		c1 = 1;
	} else {
		ss += "head|" + l + "|" + get_pos_name();
	}
	for (; c1 < s.length; c1++) {
		ss += "|" + clean_word(s[c1]);
	}
	
	return ss + "}}\n\n";
}

function conjugation(s) {
	
	var ss = "====";
	ss += get_conj_name() + "====\n{{";
	for (var c1 = 0; c1 < s.length; c1++) {
		if (s[c1] == ".a") {
			ss += get_conj_function() + get_conj_parameters();
		} else {
			ss += (c1 == 0? "" : "|") + s[c1];
		}
	}
	
	return ss + "}}\n\n";
}

/** Gets the name of the POS as it will appear in {{head}}. */
function get_pos_name() {
	switch (pos) {
	case "n": return "noun";
	case "v": return "verb";
	case "a": return "adjective";
	case "p": return "proper noun";
	case "c": return "conjunction";
	case "i": return "interjection";
	case "pn": return "pronoun";
	case "co": return "contraction";
	case "ad": return "adverb";
	case "pr": return "preposition";
	case "ar": return "article";
	case "pf": return "prefix";
	case "sf": return "suffix";
	case "id": return "idiom";
	case "ac": return "acronym";
	case "ab": return "abbreviation";
	case "sy": return "symbol";
	case "le": return "letter";
	case "nm": return "numeral";
	case "di": return "diacritical mark";
	case "vf": return "verb form";
	case "af": return "adjective form";
	case "nf": return "noun form";
	case "pb": return "proverb";
	case "ph": return "phrase";
	default: return "";
	}
}

/** Gets the headline word template for the language and pos. */
function get_head_function() {
	switch (l) {
	case "pt": switch (pos) {
		case "n": return "pt-noun";
		case "v": return "pt-verb";
		case "a": return "pt-adj";
		case "af": return "pt-adj-form";
		case "ar": return "pt-article";
		case "c": return "pt-con";
		case "co": return "pt-cont";
		case "i": return "pt-interj";
		case "le": return "pt-letter";
		case "c": return "pt-con";
		case "ph": return "pt-phrase";
		case "pn": return "pt-pron";
		case "p": return "pt-proper noun";
		case "vf": return "pt-verb-form";
		case "ad": return "pt-adv";
		}
		break;
	case "lij": switch (pos) {
		case "n": return "lij-noun";
		}
		break;
	case "en": switch (pos) {
		case "n": return "en-noun";
		case "a": return "en-adj";
		case "v": return "en-verb";
		}
		break;
	}
	return "head|" + l + "|" + get_pos_name();
}

/** Gets the conjugation template for the language and pos. */
function get_conj_function() {
	switch (l) {
	case "pt": switch (pos) {
		case "v": return "pt-conj";
		case "a": return "pt-adj-infl";
		}
		break;
	}
	return "";
}

/** Gets the parameters for the headline and conjugation templates. */
function get_conj_parameters() {
	if (pos == "nf" || pos == "vf" || pos == "af") return "";
	switch (pos) {
	
	case "n": switch (l) {
		case "pt": return pt_noun_parameters();
		
		var ss = "";
		if (is_romance_s() || is_romance_e_i()) ss += "|g=" + get_romance_gender();
		ss += "|plural|";
		if (is_romance_s()) ss += get_plural_s();
		else if (is_romance_e_i()) ss += get_plural_e_i();
		return ss;
		}
	case "a": switch (l) {
		case "pt": return pt_adj_parameters();
		}
		break;
	case "v": switch (l) {
		case "pt": return pt_verb_parameters();
		}
	}
	return "";
}

/** Makes the head= parameter if there are spaces or hyphens in the word. */
function make_head_alt() {
	var head = w.replace(/\s/g, ("}} {{l|"+l+"|")).replace(/-/g, ("}}-{{l|"+l+"|"));
	if (head == w) return "";
	return "|head={{l|" + l + "|" + head + "}}";
}

function get_romance_gender() {
	var suffix = w.substring(w.length - 4);
	
	if (suffix == "ente") return "mf";
	if (suffix == "ista") return "mf";
	suffix = w.substring(w.length - 1);
	if (suffix == "a") return "f";
	return "m";
}

function get_plural_s() {
	var suffix = w.substring(w.length - 1);
	if (is_vowel(suffix)) return w + "s";
	return w + "es";
}

function get_plural_e_i() {
	var suffix = w.substring(w.length - 1);
	if (suffix == "a" || suffix == "ă") return w.substring(0, w.length-1) + "e";
	if (suffix == "o" || suffix == "e") return w.substring(0, w.length-1) + "i";
	return w;
}

function pt_noun_parameters() {
	var suffix2 = w.substring(w.length-2);
	var suffix1 = w.substring(w.length-1);
	var ss = "|";
	
	if (suffix2 == "ão") ss += "f|";
	else ss += get_romance_gender() + "|";
	
	if (suffix2 == "il") ss += w.substring(0, w.length-2) + "is";
	else if (suffix2 == "el") ss += w.substring(0, w.length-2) + "éis";
	else if (suffix2 == "ão") ss += w.substring(0, w.length-2) + "ões";
	else if (suffix1 == "l") ss += w.substring(0, w.length-1) + "is";
	else if (is_vowel(suffix1)) ss += "s";
	else ss += "es";
	return ss;
}

function pt_adj_parameters() {
	var ss = "|";
	var suffix2 = w.substring(w.length-2);
	if (suffix2 == "ão" || suffix2 == "il") {
		return ss + w.substring(0, w.length-2) + "|" + suffix2;
	}
	return ss + w.substring(0, w.length-1) + "|" + w.substring(w.length-1);
}

function pt_verb_parameters() {
	var suffix4 = w.substring(w.length-4);
	var suffix3 = w.substring(w.length-3);
	var splitpos = 0;
	
	if (suffix4 == "erir" || suffix4 == "nder" || suffix4 == "guer" ||
		suffix4 == "guir" || suffix4 == "quer" || suffix4 == "quir") splitpos = 4;
	else if (suffix3 == "car" || suffix3 == "cer" || suffix3 == "cir" ||
			 suffix3 == "gar" || suffix3 == "ger" || suffix3 == "gir" ||
			 suffix3 == "ear" || suffix3 == "oir" || suffix3 == "uir" ||
			 suffix3 == "çar" || suffix3 == "uar") splitpos = 3;
	else splitpos = 2;
	
	return "|" + w.substring(0, w.length - splitpos) 
		 + "|" + w.substring(w.length - splitpos);
}

/** Picks between “Declension”, “Conjugation” and “Inflection”. */
function get_conj_name() {
	if (pos == "v") return "Conjugation";
	if (is_romance_s() || is_romance_e_i()) return "Inflection";
	return "Declension";
}
