/** J. C. Siebeneichler, January 2013.
Handles scripts (writing systems of languages). */



/** Returns the language script. */
function get_script(lang) {
	switch (lang) {
	case "got": return "Goth";
	case "grc": return "polytonic";
	case "el": return "Grek"
	case "ar": case "xaa": return "ar";
	case "ru": case "bg": case "uk": case "be": return "Cyrl";
	case "ett": return "Ital";
	}
	return "Latn";
}



/** Returns true if the language has alternative displays with macrons but not
the entry. */
function macronised_alts(lang) {
	return (lang == "la" || lang == "ang" || lang == "osx" || lang == "OL." ||
			lang == "gem-pro" || lang == "goh" || lang == "gmh" ||
			lang == "VL." || lang == "LL." || lang == "ML.");
}

/** Turns acute accents into macrons. */
function macronise(s) {
	s = s.replace(/á/g, "ā");
	s = s.replace(/é/g, "ē");
	s = s.replace(/í/g, "ī");
	s = s.replace(/ó/g, "ō");
	s = s.replace(/ú/g, "ū");
	s = s.replace(/ý/g, "ȳ");
	s = s.replace(/Á/g, "Ā");
	s = s.replace(/É/g, "Ē");
	s = s.replace(/Í/g, "Ī");
	s = s.replace(/Ó/g, "Ō");
	s = s.replace(/Ú/g, "Ū");
	s = s.replace(/Ý/g, "Ȳ");
	return s;
}

/** Turns macrons and acute accents into nothing. */
function demacronise(s) {
	s = macronise(s);
	s = s.replace(/ā/g, "a");
	s = s.replace(/ē/g, "e");
	s = s.replace(/ī/g, "i");
	s = s.replace(/ō/g, "o");
	s = s.replace(/ū/g, "u");
	s = s.replace(/ȳ/g, "y");
	s = s.replace(/Ā/g, "A");
	s = s.replace(/É/g, "E");
	s = s.replace(/Ē/g, "I");
	s = s.replace(/Ō/g, "O");
	s = s.replace(/Ū/g, "U");
	s = s.replace(/Ȳ/g, "Y");
	return s;
}
