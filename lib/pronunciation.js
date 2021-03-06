/** J. C. Siebeneichler, January 2013. */


function pronunciation(s) {
	var ss = "===Pronunciation===\n*";
	var accents = 0;
	var first = true;
	var c1;
	var end = "|lang=" + l + "}}\n";
	s = replace_commands(s, [".sbr", ".brz", ".ptg", ".spo", ".bol", ".rp", ".usa"],
							["South Brazil", "Brazil", "Portugal", "Paulista",
							"Bolognese", "Received Pronunciation", "General American"]);

	for (c1 = 0; c1 < s.length; c1++) {
		
		if (s[c1] == ".a") {
			if (c1 < s.length-1) ss += automatic_pronunciation(s[c1+1]);
			c1++;
		}
		else if (s[c1] == ".h") break;
		else if (s[c1] == ".") {
			accents++;
			if (accents == 1) {
				if (c1 > 0) ss += end + "*";
				ss += " {{a";
			}
		}
		else {
			if (accents == 0) {
				if (first) {
					ss += " {{IPA"
					first = false;
				}
				ss += "|/" + sampa_to_ipa(s[c1]) + "/";
			}
			else {
				ss += "|" + clean_word(s[c1]);
				accents--;
				if (accents == 0) {
					ss += "}}";
					first = true;
				}
			}
		}
	}
	ss += end;
	if (s[c1] == ".h") {
		ss += "* {{homophones";
		for (c2 = c1+1; c2 < s.length; c2++) {
			if (s[c2] == ".") ss += end + "* {{homophones";
			else ss += "|" + s[c2];
		}
		ss += end;
	}
	ss += "\n";
	return ss;
}

function sampa_to_ipa(s) {
	s = s.replace(/ts/g, "t͡s");
	s = s.replace(/dz/g, "d͡z");
	s = s.replace(/tS/g, "t͡ʃ");
	s = s.replace(/dZ/g, "d͡ʒ");
	s = s.replace(/B/g, "β");
	s = s.replace(/T/g, "θ");
	s = s.replace(/D/g, "ð");
	s = s.replace(/S/g, "ʃ");
	s = s.replace(/Z/g, "ʒ");
	s = s.replace(/G/g, "ɣ");
	s = s.replace(/h\\/g, "ɦ");
	s = s.replace(/r\\/g, "ɹ");
	s = s.replace(/R\\`/g, "ɻ");
	s = s.replace(/R\\/g, "ʀ")
	s = s.replace(/N/g, "ŋ");
	s = s.replace(/L/g, "ʎ");
	s = s.replace(/5/g, "ɫ");
	s = s.replace(/4/g, "ɾ");
	s = s.replace(/3/g, "ɜ");
	s = s.replace(/@/g, "ə");
	s = s.replace(/R/g, "ʁ");
	s = s.replace(/J/g, "ɲ");
	s = s.replace(/X/g, "χ");
	s = s.replace(/A/g, "ɐ");
	s = s.replace(/Ã/g, "ɐ̃");
	s = s.replace(/E/g, "ɛ");
	s = s.replace(/1/g, "ɨ");
	s = s.replace(/O/g, "ɔ");
	s = s.replace(/:/g, "ː");
	s = s.replace(/V/g, "ʌ");
	s = s.replace(/U/g, "ʊ");
	s = s.replace(/I/g, "ɪ");
	s = s.replace(/g/g, "ɡ");
	s = s.replace(/_h/g, "ʰ");
	s = s.replace(/_w/g, "ʷ");
	s = s.replace(/@`/g, "˞");
	s = s.replace(/3`/g, "ɝ");
	s = s.replace(/`/g, "˞");
	s = s.replace(/~/g, "̃");
	s = s.replace(/_"/g, "̈");
	s = s.replace(/_o/g, "̞");
	s = s.replace(/_r/g, "̟");
	s = s.replace(/_d/g, "̫");
	s = s.replace(/_^/g, "̰");
	s = s.replace(/_a/g, "̺");
	s = s.replace(/_s/g, "̯");
	s = s.replace(/\'/g, "ˌ");
	s = s.replace(/"/g, "ˈ");
	return s;
}

function automatic_pronunciation(s) {
	switch (l) {
	case "pt": return autopron_pt(s);
	}
	return "";
}

function autopron_pt(s) {
	var suf1 = w.substring(w.length-1);
	var ss = ""
	
	switch (suf1) {
	case "r":
		ss += " {{a|Paulista}} {{IPA|/" + sampa_to_ipa(s + "(4)");
		ss += "/|-(ɹ)|lang=pt}}\n* {{a|South Brazil}} ";
		ss += "{{IPA|/" + sampa_to_ipa(s + "(4)") + "/|-(ɻ)";
		return ss;
	case "a":
		ss += " {{a|Brazil}} {{IPA|/" + sampa_to_ipa(s + "a") + "/|/";
		ss += sampa_to_ipa((s + "A")) + "/";
		return ss;
	case "o":
		ss += " {{a|Brazil}} {{IPA|/" + sampa_to_ipa(s + "u");
		ss += "/|lang=pt}}\n* {{a|South Brazil}} ";
		ss += "{{IPA|/" + sampa_to_ipa(s + "o") + "/";
		return ss;
	}
	return "";
}










