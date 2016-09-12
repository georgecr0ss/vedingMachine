/// <reference path="vendingMachine.ts" />
/// <reference path="typings/knockout.d.ts" />
import * as vm  from "./vendingMachine"


var machine = new vm.VendingMachine;
machine.size = vm.VendingMachineSize.medium;
ko.applyBindings(machine);