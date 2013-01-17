/* J. C. Siebeneichler, December 2012.
*/


/*
Returns a list which has many lines, each with a title item and several
linked items, and possibly another item at the end.
Examples: alternative forms, synonyms.

	values: the string array from the input;
	
	string template1: the template for command .;
	boolean ends1: if true, a newline is added after command . unless there
					aren’t any more items, if false before;
	
	string template2: the template for command ..;
	boolean ends2:  idem for command .. .
*/

function comma_list(values, template1, ends1, template2, ends2) {
	if (values.length == 0) return "";
	
	var ss = "* ";
	var t1c = 0;	//template 1 count
	var t2c = 0;	//template 2 count
	
	for (var c1 = 0; c1 < values.length; c1++) {
		
		if (values[c1] == ".") {
			t1c++;
			ss += begin_funct(template1, ends1, t1c, c1);
		}
		else if (values[c1] == "..") {
			t2c++;
			ss += begin_funct(template2, ends2, t2c, c1);
		}
		else {
			values[c1] = clean_word(values[c1]);
			var last = (c1 == values.length-1);
			if (t1c > 0) {
				t1c--;
				ss += "|" + values[c1];
				ss += end_funct(template1, ends1, t1c, last);
			}
			else if (t2c > 0) {
				t2c--;
				ss += "|" + values[c1];
				ss += end_funct(template2, ends2, t2c, last);
			}
			else {
				ss += ll(values[c1]) + comma(values, c1);
			}
		}
	}
	return ss;
}


function begin_funct(template, ends, tc, gc) {
	if (tc == 1) return (((gc > 0 && !ends)? "\n* " : "") + "{{" + template);
	return "";
}

function end_funct(template, ends, tc, last) {
	if (tc == 0) return "}}" + ((!last && ends)? "\n* " : " ");
	return "";
}

/** Return a comma and a space as needed after an item. */
function comma(values, c) {
	var ss = "";
	if (c < values.length -1) {
		if (values[c+1].charAt(0) != ".") ss += ",";
		ss += " ";
	}
	return ss;
}
