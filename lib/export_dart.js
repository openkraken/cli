function moduleNameToCamerlCase(moduleName) {
  let group = moduleName.split('_');
  return group.map(g => g[0].toUpperCase() + g.slice(1)).join('');
}

module.exports = function(buffer, moduleName) {

  let uint8Array = Uint8Array.from(buffer);

  return `// This file is generated by kraken-cli, do not edit this file.

import 'dart:typed_data';
import 'package:kraken/bridge.dart';

const List<int> _list = [
  ${uint8Array.join(',')}
];

void register${moduleNameToCamerlCase(moduleName)}ByteData() {
  Uint8List byteData = Uint8List.fromList(_list);
  registerPluginByteCode(byteData, '${moduleName}');
}
`;
}
