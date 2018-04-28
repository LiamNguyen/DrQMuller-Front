import _ from 'lodash';
import MachineImageNameConstants from '../constants/MachineImageNameConstants';

export default {
  getMachineImage(machineId, machines) {
    return !machines || !machineId || _.isEmpty(machines)
      ? null
      : machines
          .filter(machine => machine.id === machineId)
          .map(
            machine =>
              MachineImageNameConstants.filter(
                machineImage => machine.name === machineImage.name
              )[0]
          )[0].image;
  },
  getMachineName(machineId, machines) {
    return machines && machineId && machines.length > 0
      ? machines.filter(machine => machine.id === machineId)[0].name
      : '';
  }
};
