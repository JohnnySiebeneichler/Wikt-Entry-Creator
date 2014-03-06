/* J. C. Siebeneichler, December 2012.
*/

function lang_heading(s) {

	l = ((s[0])? s[0] : "");
	w = ((s[1])? clean_word(s[1]) : "");	
	var ss = "==";
	ss += lang_name(l) + "==\n";
	if (s[3] && s[3] != "") {
		ss += "{{slim-wikipedia";
		if (s[3] != ".") ss += "|" + s[3];
		ss += "}}\n";
	}
	if (s[2] && s[2] != "") {
		ss += "[[" + (s[2].substring(0,5) == "File:"? "" : "File:");
		ss += s[2] + "|thumb|'''";
		ss +=  w.substring(0,1).toUpperCase() + w.substring(1);
		ss += "'''.]]\n";
	}
	return ss + "\n";
}


function lang_name(s) {
	if (s == "pt") return "Portuguese";
	if (s == "en") return "English";
	if (s == "es") return "Spanish";
	if (s == "rgn") return "Romagnol";
	if (s == "egl") return "Emilian";
	if (s == "roa-opt") return "Old Portuguese";
	if (s == "fax") return "Fala";
	if (s == "hrx") return "Hunsrik";
	if (s == "lij") return "Ligurian";
	if (s == "mhn") return "Mòcheno";
	if (s == "kgp") return "Kaingang";
	if (s == "cim") return "Cimbrian";
	if (s == "lld") return "Ladin";
	if (s == "lmo") return "Lombard";
	if (s == "qu") return "Quechua";
	if (s == "gl") return "Galician";
	if (s == "ast") return "Asturian";
	if (s == "an") return "Aragonese";
	return "{{subst:" + s + "}}";
}

function is_lang_code(s) {
	if (s.length <= 3 && s.length >= 2) return true;
	if (s.length == 7 && s.charAt(3) == '-') return true;
	return false;
}






/** Returns true if the language is a Romance language whose plurals end in -s.
*/
function is_romance_s() {
	return (l == "fr" || l == "ca" || l == "es" || l == "pt" || l == "wa" ||
			l == "an" || l == "ast"|| l == "gl" || l == "oc" || l == "fro"||
			l == "zrp"|| l == "lad"|| l == "frm"|| l == "pro"|| l == "pro"||
			l == "fur"|| l == "rm" || l == "osp"|| l == "xno"|| l == "mwl"||
			l == "frp"|| l == "pcd"|| l == "mxi"|| l == "ext"|| l == "frc"||
			l == "fax"|| l == "lou"||
			l == "roa-leo" || l == "roa-nor" || l == "roa-jer" ||
			l == "roa-grn" || l == "roa-gal" || l == "roa-ptg" ||
			l == "fra-aca");
}

/** Returns true if the language is a Romance language whose plurals end in -e
or -i. */	
function is_romance_e_i() {
	return (l == "it" || l == "ro" || l == "co" || l == "sc" || l == "lld"||
			l == "scn"|| l == "nap"|| l == "pms"|| l == "vec"|| l == "dlm"||
			l == "rup"|| l == "ruo"|| l == "ruq"|| l == "sdn"|| l == "scn"||
			l == "lmo"|| l == "sro"|| l == "lij"|| l == "sdc"|| l == "egl"||
			l == "ist"||
			l == "roa-tar" || l == "roa-oit");
}

function is_germanic() {
	return (l == "nl" || l == "af" || l == "de" || l == "fy" || l == "li" ||
			l == "yi" || l == "lb" || l == "gmh"|| l == "goh"|| l == "enm"||
			l == "ang"|| l == "nds"|| l == "en" || l == "bar"|| l == "ksh"||
			l == "dum"|| l == "gml"|| l == "osx"|| l == "ofs"|| l == "gsw"||
			l == "odt"|| l == "frk"|| l == "stq"|| l == "vls"|| l == "pdc"||
			l == "frr"|| l == "frs"|| l == "pdt"|| l == "swg"|| l == "wym"||
			l == "cim"|| l == "geh"|| l == "hrx"|| l == "mhn"|| l == "pld"||
			l == "sli"|| l == "yol"|| l == "sco"|| l == "got"|| l == "xvn"||
			l == "da" || l == "sv" || l == "is" || l == "fo" || l == "nb" ||
			l == "nn" || l == "no" || l == "non"|| l == "nrn"|| l == "dlc"||
			l == "gmq-gut" || l == "gmq-mno" || l == "gmq-osw" ||
			l == "gmq-oda" || l == "gmq-pro" || l == "nds-de"  ||
			l == "nds-nl");
}

function is_celtic() {
	return (l == "br" || l == "cy" || l == "kw" || l == "owl"|| l == "wlm"||
			l == "obt"|| l == "xbm"|| l == "oco"|| l == "xlp"|| l == "xce"||
			l == "ga" || l == "gv" || l == "gd" || l == "sga"|| l == "mga"||
			l == "pgl");
}

function is_slavic() {
	//to do.
	return false;
}

function is_indo_iranian() {
	//to do.
	return false;
}

function is_semitic() {
	//to do.
	return false;
}


function old_language() {
	switch (l) {
	case "pt": 
	case "gl":
	case "fax": return "roa-opt";
	
	case "es":
	case "ext": return "osp";
	
	case "enm":
	case "en": return "ang";
	
	case "mhn":
	case "hrx":
	case "bar":
	case "gmh":
	case "gsw":
	case "lb":
	case "yi":
	case "de": return "goh";
	
	case "roa-gal":
	case "roa-grn":
	case "roa-jer":
	case "roa-nor":
	case "frm":
	case "pcd":
	case "fr": return "fro";
	
	case "el": return "grc";
	
	case "la": return "OL.";
	
	case "it": return "roa-oit";
	
	case "dum":
	case "li":
	case "af":
	case "nl": return "odt";
	
	case "ca":
	case "oc": return "pro";
	
	case "wlm":
	case "cy": return "owl";
	
	case "mga":
	case "ga": return "sga";
	
	case "hy": return "xcl";
	
	case "stq":
	case "frr":
	case "fy": return "ofs";
	
	case "nds-nl":
	case "nds-de":
	case "gml":
	case "nds": return "osx";
	
	case "pal":
	case "fa": return "peo";
	
	case "kw": return "oco";
	}
	return "";
}

function middle_language() {
	switch (l) {
	case "en": return "enm";
	
	case "mhn":
	case "hrx":
	case "bar":
	case "gsw":
	case "lb":
	case "yi":
	case "de": return "gmh";
	
	case "fr": return "frm";
	
	case "li":
	case "af":
	case "nl": return "dum";
	
	case "cy": return "wlm";
	
	case "ga": return "mga";
	
	case "nds-nl":
	case "nds-de":
	case "nds": return "gml";
	
	case "fa": return "pal";
	}
	return "";
}

function proto_language1() {
	if (is_romance_s() || is_romance_e_i()) return "VL.";
	//if (is_germanic()) return "gem-pro";
	//if (is_celtic()) return "cel-pro";
	//if (is_semitic()) return "sem-pro";
	//if (is_slavic()) return "sla-pro";
	return "{{subst:etyl:{{subst:" + l + "/family}}/family}}-pro";
}

function proto_language2() {

	return "{{subst:etyl:{{subst:etyl:{{subst:" + l + "/family}}/family}}/family}}-pro";
}



