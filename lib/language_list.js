/** J. C. Siebeneichler, January 2013.

Forms lists in the following format:

{{template}}
* Language: term, term, term (qualifier), term
* Language: term
{{template}}
* Language: term, term
{{template}}

*/

/** templateXXX: for forming the box;
	maxtemplateless: max amount of lines before a box is created
*/
function language_list(values, templatetop, templatemid, templatebot,
					   maxtemplateless) {

	var count = get_total_languages(values);
	var has = count > maxtemplateless;//has box template
	var ss = "";
	var q = 0;  //current line
	var qc = 0; //qualifier count
	var lang = "";
	
	if (has) ss += "{{" + templatetop + "}}\n";
	for (var c1 = 0; c1 < values.length; c1++) {
		var splits = needs_split_ll(has, q, count);
		if (values[c1] == ".") {
			qc++;
			if (qc == 1) ss += " {{qualifier";
		} else {
			if (qc > 0) {
				qc--;
				ss += "|" + clean_word(values[c1])
				if (qc == 0) {
					ss += "}}";
					if (splits) ss += "{{" + templatemid + "}}";
					if (needs_comma(values, c1)) ss += ", ";
				}
			} else if (is_lang_code(values[c1])) {
				if (splits) ss += "{{" + templatemid + "}}";
				lang = values[c1];
				if (q > 0) ss += "\n";
				ss += "* " + lang_name(lang) + ": ";
				q++;
			} else {
				//ss += "{{l|" + lang + "|" + clean_word(values[c1]) + "}}";
				ss += lll(values[c1], lang);
				if (needs_comma(values, c1)) ss += ", ";
			}
		}
	}
	if (has) ss += "{{" + templatebot + "}}";
	return ss + "\n\n";
}

/** Calculates how many lines there are. */
function get_total_languages(values) {
	var count = 0;
	for (var c1 = 0; c1 < values.length; c1++) {
		if (is_lang_code(values[c1])) count++;
	}
	return count;
}

function needs_split_ll(has, line, total) {
	if (!has) return false;
	return (Math.ceil(total / 2) == line);
}

function needs_comma(values, current) {
	return (current < values.length-1 && values[current+1] != "." &&
			!is_lang_code(values[current+1]));
}
