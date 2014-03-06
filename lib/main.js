/* J. C. Siebeneichler, December 2012.
*/

var i;		//Input textbox.
var o;		//Output textbox.

var l;		//Language code.
var pos;	//Part of speech abreviation.
var w;		//The word. Equivalent to what would be {{PAGENAME}} in templates.
var cl;		//Creation link.



function main() {
	i = document.getElementById("input");
	o = document.getElementById("output");
	cl = document.getElementById("creation_link");
	
	var lines = i.value.replace(/\n\n/g, "\n \n");
	lines = lines.split("\n");
	
	o.value = (
		parse_lang(lines[0]) +
		parse_alt_forms(lines[1])+
		parse_ety(lines[2]) +
		parse_pron(lines[3]) +
		parse_pos(lines[4]) +
		parse_headline(lines[5]) +
		parse_defs(lines[6]) +
		parse_conj(lines[7]) +
		parse_semantic_rels(lines[8]) +
		parse_der_terms(lines[9]) +
		parse_descendants(lines[10]) +
		parse_rel_terms(lines[11]) +
		
		
		parse_pos(lines[14]) +
		parse_headline(lines[15]) +
		parse_defs(lines[16]) +
		parse_conj(lines[17]) +
		parse_semantic_rels(lines[18]) +
		parse_der_terms(lines[19]) +
		parse_descendants(lines[20]) +
		parse_rel_terms(lines[21]) +
		
		
		parse_pos(lines[22]) +
		parse_headline(lines[23]) +
		parse_defs(lines[24]) +
		parse_conj(lines[25]) +
		parse_semantic_rels(lines[26]) +
		parse_der_terms(lines[27]) +
		parse_descendants(lines[28]) +
		parse_rel_terms(lines[29]) +
		
		parse_see_also(lines[12]) +
		parse_cats(lines[13]));
	
	cl.href = get_creation_link(o.value, lang_name(lines[0].split(" ")[0]), lines[0].split(" ")[1]);
	
}

function parse_lang(s) {
	if (!s || s.charAt(0) == " ") return "";
	return lang_heading(s.split(" "));
}

function parse_alt_forms(s) {
	if (!s || s.charAt(0) == " ") return "";
	return alt_forms(s.split(" "));
}

function parse_ety(s) {
	if (!s || s.charAt(0) == " ") return "";
	return etymology(s.split(" "));
}

function parse_pron(s) {
	if (!s || s.charAt(0) == " ") return "";
	return pronunciation(s.split(" "));
}

function parse_pos(s) {
	if (!s || s.charAt(0) == " ") return "";
	return get_pos_heading(s.split(" "));
}

function parse_headline(s) {
	if (!s || s.charAt(0) == " ") return "";
	return headline(s.split(" "));
}

function parse_defs(s) {
	if (!s || s.charAt(0) == " ") return "";
	return definitions(s.split(" "));
}

function parse_conj(s) {
	if (!s || s.charAt(0) == " ") return "";
	return conjugation(s.split(" "));
}

function parse_semantic_rels(s) {
	if (!s || s.charAt(0) == " ") return "";
	return call_each_semantic_rel(s);
}

function parse_der_terms(s) {
	if (!s || s.charAt(0) == " ") return "";
	return derived_terms(s.split(" "));
}

function parse_descendants(s) {
	if (!s || s.charAt(0) == " ") return "";
	return descendants(s.split(" "));
}

function parse_rel_terms(s) {
	if (!s || s.charAt(0) == " ") return "";
	return related_terms(s.split(" "));
}


function parse_see_also(s) {
	if (!s || s.charAt(0) == " ") return "";
	return see_also(s.split(" "));
}

function parse_cats(s) {
	if (!s || s.charAt(0) == " ") return "";
	return categories(s.split(" "));
}





