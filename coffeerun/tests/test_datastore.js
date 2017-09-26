var ds = new App.DataStore();
ds.add('m@bond.com', 'tea');
ds.add('james@bond.com', 'eshpressho');
ds.getAll();
ds.remove('james@bond');
ds.getAll();
ds.get('m@bond.com');
ds.get('james@bond.com');
