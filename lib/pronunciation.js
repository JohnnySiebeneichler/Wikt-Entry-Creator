/** J. C. Siebeneichler, January 2013. */


function pronunciation(s) {
	var ss = "===Pronunciation===\n*";
	var accents = 0;
	var first = true;
	s = replace_commands(s, [".sbr", ".brz", ".ptg", ".spo", ".bol", ".rp", ".usa"],
							["South Brazil", "Brazil", "Portugal", "Paulista",
							"Bolognese", "Received Pronunciation", "General American"]);

	for (var c1 = 0; c1 < s.length; c1++) {
		
		if (s[c1] == ".a") {
			ss += automatic_pronunciation();
		}
		else if (s[c1] == ".") {
			accents++;
			if (accents == 1) {
				if (c1 > 0) ss += "|lang=" + l + "}}\n*";
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
				ss += "|" + s[c1];
				accents--;
				if (accents == 0) {
					ss += "}}";
					first = true;
				}
			}
		}
	}
	ss +=  "|lang=" + l + "}}\n\n";
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
	s = s.replace(/:/g, "꞉");
	s = s.replace(/V/g, "ʌ");
	s = s.replace(/U/g, "ʊ");
	s = s.replace(/I/g, "ɪ");
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
	s = s.replace(/\'/g, "ˌ");
	s = s.replace(/"/g, "ˈ");
	return s;
}

function automatic_pronunciation() {
	switch (l) {
	case "pt": return autopron_pt();
	}
	return "";
}

function autopron_pt() {

}
