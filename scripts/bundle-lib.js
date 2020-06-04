//getting mod by name
var mod = Vars.mods.locateMod("bundle-lib");
var change = "mod."+ modName + ".";
mod.meta.displayName = Core.bundle.get(change+"displayName");
mod.meta.description = Core.bundle.get(change+"description");