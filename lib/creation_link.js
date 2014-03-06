/** J. C. Siebeneichler, March 2014.
Generates the link to create the entry directly in Wiktionary. */

function get_creation_link(s, l, t) {

	s = s.replace(/(=)/g, "%3D");
	s = s.replace(/\n/g, "%0A");
	s = s.replace(/\s/g, "%20");
	s = s.replace(/\#/g, "%23");
	t = t.replace(/\s/g, "_");
	
	fulllink = "https://en.wiktionary.org/w/index.php?";
	fulllink += "title=" + t.replace(/\./g, "_");;
	fulllink += "&action=edit";
	fulllink += "&lang=" + l
	fulllink += "&plt=" + s;
	
	return fulllink;
}
