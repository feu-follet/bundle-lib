//getting language from game settings, change nothing
var language= Core.bundle.getLocale().toString();
//getting mod by name, replace "bundle-lib" with the name of your mod (not displayName, be carefull)
var mod = Vars.mods.locateMod("bundle-lib");
//variable "locale" stores the name of the bundle for the language, change nothing
var locale = "bundle_" + language

//several bundles in lists ["displayName,description"], you can add as many lists as you want, be carefull the name must fit the bundle name
var bundle_fr = ["[orange]bundles librairie", "Une librairie permettant de traduire la description et le nom d'un mod"];

/*list-ception time !
keep this list "bundles",for each bundle list defined previously add the list name + list name as a string*/
var bundles = [bundle_fr,"bundle_fr"]

//Let the magic happen !
locale)){

