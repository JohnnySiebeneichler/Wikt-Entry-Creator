Wikt-Entry-Creator
==================

Instructions:
Each line represents a section of a Wiktionary entry. 
Commands start with .
Some lines have a primary command (.) and a secondary command (..)
Lines are parsed by splitting them at whitespaces, if the word contains a space, use . instead, and the program should convert them to spaces.


First line:
* lang code
* word
* picture
* WP article

Second line:
* alternative forms
Commands:
* .: qualifier
* ..: new line
* .o: obsolete
* .d: dated
* .a: archaic
* .r: rare
(add more to /lib/alt_forms.js)


