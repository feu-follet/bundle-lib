//getting language in game settings
var language= Core.bundle.getLocale().toString();
//getting mod by name
var mod = Vars.mods.locateMod("bundle-lib");
//variable "locale" stores the name of the bundle for the language
var locale = "bundle_" + language

//several bundles in lists ["displayName,description"]
var bundle_fr = ["[orange]bundles librairie", "Une librairie permettant de traduire la description et le nom d'un mod"];

//list-ception time !
var bundles = [bundle_fr,"bundle_fr"]

  if (bundles.includes(locale)){
    var current = bundles.indexOf(locale)-1;
    var currentBundle = bundles[current];
    mod.meta.displayName = currentBundle[0];
    mod.meta.description = currentBundle[1];
  }