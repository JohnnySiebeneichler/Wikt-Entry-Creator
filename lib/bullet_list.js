/* J. C. Siebeneichler, January 2013.
*/


/*
Returns a list where each item is in its own line, possibly with a qualifier.
*/

function bullet_list(values, boxtemptop, boxtempmid, boxtempbot) {
	if (values.length == 0) return "";
	
	var qc = 0;	//qualifier count
	var items = get_total_bullets(values);
	var sections = get_section_q(items);
	var top = get_top_temp(items, boxtemptop);
	var mid = get_mid_temp(items, boxtempmid);
	var bot = get_bot_temp(items, boxtempbot);
	var ips = Math.ceil(items / sections);
	var ss = "";
	var q = 0;
	
	ss += top + (top != ""? "\n" : "") + "* ";
	
	for (var c1 = 0; c1 < values.length; c1++) {
		if (values[c1] == ".") {
			qc++;
			if (qc == 1) ss += " {{qualifier";
		}
		else {
			var splits = (mid != "" && needs_split_bl(q, items, ips));
			if (qc > 0) {
				qc--;
				ss += "|" + values[c1];
				if (qc == 0) {
					ss += "}}";
					if (splits) ss += "\n" + mid;
					q++;
				}
			}
			else {
				ss += (c1 > 0? "\n* " : "") + ll(values[c1]);
				if (splits && values[c1+1] != ".") ss += "\n" + mid;
				if (c1 < values.length-1 && values[c1+1] != ".") q++;
			}
		}
	}
	
	if (bot != "") ss += "\n" + bot;
	return ss + "\n\n";
}

/** The total is not length, because qualifiers go on the same line. */
function get_total_bullets(values) {
	var qualifs = 0;
	for (var c1 = 0; c1 < values.length; c1++) {
		if (values[c1] == ".") qualifs++;
	}
	return values.length - 2 * qualifs;
}

function needs_split_bl(c, q, ips) {
	c++;
	if (c == q) return false;
	if (q % ips == 0) return c % ips == 0;
	var main = q - (q % ips);
	var missing = ips - (q % ips) - 1;
	var extra = (main / ips) - missing;
	var bigsections = extra * ips;
	
	if (c > bigsections) {
		return (c - bigsections) % (ips-1) == 0;
	}
	else {
		return c % ips == 0;
	}
}

function get_section_q(q) {
	if (q > 24) return 2;
	if (q >= 20) return 4;
	if (q >= 12) return 3;
	if (q >= 6) return 2;
	return 1;
}

function get_top_temp(q, boxtemptop) {
	if (q > 24) return "{{" + boxtemptop + "}}";
	if (q >= 20) return "{{top4}}";
	if (q >= 12) return "{{top3}}";
	if (q >= 6) return "{{top2}}";
	return "";
}

function get_mid_temp(q, boxtempmid) {
	if (q > 24) return "{{" + boxtempmid + "}}";
	if (q >= 20) return "{{mid4}}";
	if (q >= 12) return "{{mid3}}";
	if (q >= 6) return "{{mid2}}";
	return "";
}

function get_bot_temp(q, boxtempbot) {
	if (q > 24) return "{{" + boxtempbot + "}}";
	if (q >= 6) return "{{bottom}}";
	return "";
}
