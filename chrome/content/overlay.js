﻿/*
   Copyright (c) 2010-present example.org

   Permission is hereby granted, free of charge, to any person obtaining a copy
   of this software and associated documentation files (the "Software"), to deal
   in the Software without restriction, including without limitation the rights
   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   copies of the Software, and to permit persons to whom the Software is
   furnished to do so, subject to the following conditions:

   The above copyright notice and this permission notice shall be included in
   all copies or substantial portions of the Software.

   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   THE SOFTWARE.
*/

var fireup = {

	// Shortcuts:
	Cc: Components.classes,
	Ci: Components.interfaces,
	Cr: Components.results,
	Cu: Components.utils,

	// Preference branch for the extension:
	branch: null,

	// String bundle for the extension:
	bundle: null,

	// Initialization:
	init: function()
	{
		// Initialize preferences:
		var prefservice = this.Cc["@mozilla.org/preferences-service;1"].getService(this.Ci.nsIPrefService);
		this.branch = prefservice.getBranch("extensions.fireup.");
		// var value = this.branch.getCharPref("value");

		// Initialize strings:
		this.bundle = document.getElementById("fireup-strings");
		// var str = this.bundle.getString("fireupSomeString");
	},

	// Shutdown:
	uninit: function()
	{
	}
};

window.addEventListener("load",   function() { fireup.init();  }, false);
window.addEventListener("unload", function() { fireup.uninit() }, false);