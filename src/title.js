/*
Uses title edit logic from http://teleogistic.net/2013/01/make-github-issue-numbers-appear-in-browser-tabs/
*/
// Run script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
		var t, ttext, issueno, href = document.location.href;

		// match https://github.com/project/repo/issues/123456
		issueno = href.match(/\/issues\/([0-9]+)/);
		if ( ! issueno[1] )
			return;

		t = document.getElementsByTagName( 'title' );
		ttext = t[0].innerHTML;
		t[0].innerHTML = '#' + issueno[1] + ' ' + ttext;
});
