var wms_layers = [];

var format_WORSHIPCENTRES_0 = new ol.format.GeoJSON();
var features_WORSHIPCENTRES_0 = format_WORSHIPCENTRES_0.readFeatures(json_WORSHIPCENTRES_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WORSHIPCENTRES_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WORSHIPCENTRES_0.addFeatures(features_WORSHIPCENTRES_0);
var lyr_WORSHIPCENTRES_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WORSHIPCENTRES_0, 
                style: style_WORSHIPCENTRES_0,
                interactive: true,
                title: '<img src="styles/legend/WORSHIPCENTRES_0.png" /> WORSHIP CENTRES'
            });
var format_SCHOOLS_1 = new ol.format.GeoJSON();
var features_SCHOOLS_1 = format_SCHOOLS_1.readFeatures(json_SCHOOLS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCHOOLS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCHOOLS_1.addFeatures(features_SCHOOLS_1);
var lyr_SCHOOLS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCHOOLS_1, 
                style: style_SCHOOLS_1,
                interactive: true,
                title: '<img src="styles/legend/SCHOOLS_1.png" /> SCHOOLS'
            });
var format_MOSQUE_2 = new ol.format.GeoJSON();
var features_MOSQUE_2 = format_MOSQUE_2.readFeatures(json_MOSQUE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MOSQUE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MOSQUE_2.addFeatures(features_MOSQUE_2);
var lyr_MOSQUE_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MOSQUE_2, 
                style: style_MOSQUE_2,
                interactive: true,
                title: '<img src="styles/legend/MOSQUE_2.png" /> MOSQUE'
            });
var format_RAILWAY_3 = new ol.format.GeoJSON();
var features_RAILWAY_3 = format_RAILWAY_3.readFeatures(json_RAILWAY_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RAILWAY_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAILWAY_3.addFeatures(features_RAILWAY_3);
var lyr_RAILWAY_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RAILWAY_3, 
                style: style_RAILWAY_3,
                interactive: true,
                title: '<img src="styles/legend/RAILWAY_3.png" /> RAILWAY'
            });
var format_BOUNDARY_4 = new ol.format.GeoJSON();
var features_BOUNDARY_4 = format_BOUNDARY_4.readFeatures(json_BOUNDARY_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOUNDARY_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOUNDARY_4.addFeatures(features_BOUNDARY_4);
var lyr_BOUNDARY_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BOUNDARY_4, 
                style: style_BOUNDARY_4,
                interactive: true,
                title: '<img src="styles/legend/BOUNDARY_4.png" /> BOUNDARY'
            });
var format_STREETS_5 = new ol.format.GeoJSON();
var features_STREETS_5 = format_STREETS_5.readFeatures(json_STREETS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STREETS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STREETS_5.addFeatures(features_STREETS_5);
var lyr_STREETS_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_STREETS_5, 
                style: style_STREETS_5,
                interactive: true,
                title: '<img src="styles/legend/STREETS_5.png" /> STREETS'
            });
var format_MINOR_ROADSS_6 = new ol.format.GeoJSON();
var features_MINOR_ROADSS_6 = format_MINOR_ROADSS_6.readFeatures(json_MINOR_ROADSS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MINOR_ROADSS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINOR_ROADSS_6.addFeatures(features_MINOR_ROADSS_6);
var lyr_MINOR_ROADSS_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MINOR_ROADSS_6, 
                style: style_MINOR_ROADSS_6,
                interactive: true,
                title: '<img src="styles/legend/MINOR_ROADSS_6.png" /> MINOR_ROADSS'
            });
var format_MAJOR_ROADS_7 = new ol.format.GeoJSON();
var features_MAJOR_ROADS_7 = format_MAJOR_ROADS_7.readFeatures(json_MAJOR_ROADS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAJOR_ROADS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAJOR_ROADS_7.addFeatures(features_MAJOR_ROADS_7);
var lyr_MAJOR_ROADS_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MAJOR_ROADS_7, 
                style: style_MAJOR_ROADS_7,
                interactive: true,
                title: '<img src="styles/legend/MAJOR_ROADS_7.png" /> MAJOR_ROADS'
            });
var format_HOTEL_8 = new ol.format.GeoJSON();
var features_HOTEL_8 = format_HOTEL_8.readFeatures(json_HOTEL_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOTEL_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOTEL_8.addFeatures(features_HOTEL_8);
var lyr_HOTEL_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HOTEL_8, 
                style: style_HOTEL_8,
                interactive: true,
                title: '<img src="styles/legend/HOTEL_8.png" /> HOTEL'
            });
var format_HEALTHFACILITIES_9 = new ol.format.GeoJSON();
var features_HEALTHFACILITIES_9 = format_HEALTHFACILITIES_9.readFeatures(json_HEALTHFACILITIES_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HEALTHFACILITIES_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HEALTHFACILITIES_9.addFeatures(features_HEALTHFACILITIES_9);
var lyr_HEALTHFACILITIES_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HEALTHFACILITIES_9, 
                style: style_HEALTHFACILITIES_9,
                interactive: true,
                title: '<img src="styles/legend/HEALTHFACILITIES_9.png" /> HEALTH FACILITIES'
            });
var format_FILLINGSTATION_10 = new ol.format.GeoJSON();
var features_FILLINGSTATION_10 = format_FILLINGSTATION_10.readFeatures(json_FILLINGSTATION_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FILLINGSTATION_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FILLINGSTATION_10.addFeatures(features_FILLINGSTATION_10);
var lyr_FILLINGSTATION_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FILLINGSTATION_10, 
                style: style_FILLINGSTATION_10,
                interactive: true,
                title: '<img src="styles/legend/FILLINGSTATION_10.png" /> FILLING STATION'
            });
var format_BANKS_11 = new ol.format.GeoJSON();
var features_BANKS_11 = format_BANKS_11.readFeatures(json_BANKS_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANKS_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANKS_11.addFeatures(features_BANKS_11);
var lyr_BANKS_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BANKS_11, 
                style: style_BANKS_11,
                interactive: true,
                title: '<img src="styles/legend/BANKS_11.png" /> BANKS'
            });

lyr_WORSHIPCENTRES_0.setVisible(true);lyr_SCHOOLS_1.setVisible(true);lyr_MOSQUE_2.setVisible(true);lyr_RAILWAY_3.setVisible(true);lyr_BOUNDARY_4.setVisible(true);lyr_STREETS_5.setVisible(true);lyr_MINOR_ROADSS_6.setVisible(true);lyr_MAJOR_ROADS_7.setVisible(true);lyr_HOTEL_8.setVisible(true);lyr_HEALTHFACILITIES_9.setVisible(true);lyr_FILLINGSTATION_10.setVisible(true);lyr_BANKS_11.setVisible(true);
var layersList = [lyr_WORSHIPCENTRES_0,lyr_SCHOOLS_1,lyr_MOSQUE_2,lyr_RAILWAY_3,lyr_BOUNDARY_4,lyr_STREETS_5,lyr_MINOR_ROADSS_6,lyr_MAJOR_ROADS_7,lyr_HOTEL_8,lyr_HEALTHFACILITIES_9,lyr_FILLINGSTATION_10,lyr_BANKS_11];
lyr_WORSHIPCENTRES_0.set('fieldAliases', {'Id': 'Id', });
lyr_SCHOOLS_1.set('fieldAliases', {'Id': 'Id', 'SCHOOLS': 'SCHOOLS', });
lyr_MOSQUE_2.set('fieldAliases', {'Id': 'Id', 'MOSQUE': 'MOSQUE', });
lyr_RAILWAY_3.set('fieldAliases', {'Id': 'Id', 'RAILWAY': 'RAILWAY', });
lyr_BOUNDARY_4.set('fieldAliases', {'Id': 'Id', });
lyr_STREETS_5.set('fieldAliases', {'Id': 'Id', 'STREET': 'STREET', });
lyr_MINOR_ROADSS_6.set('fieldAliases', {'Id': 'Id', 'MINORROADS': 'MINORROADS', });
lyr_MAJOR_ROADS_7.set('fieldAliases', {'Id': 'Id', 'MAJORROADS': 'MAJORROADS', });
lyr_HOTEL_8.set('fieldAliases', {'Id': 'Id', 'HOTEL': 'HOTEL', 'HOTELS': 'HOTELS', });
lyr_HEALTHFACILITIES_9.set('fieldAliases', {'Id': 'Id', 'HOSPITALS': 'HOSPITALS', 'HOSPITAL': 'HOSPITAL', });
lyr_FILLINGSTATION_10.set('fieldAliases', {'Id': 'Id', 'GASSTATION': 'GASSTATION', });
lyr_BANKS_11.set('fieldAliases', {'Id': 'Id', 'BANK': 'BANK', });
lyr_WORSHIPCENTRES_0.set('fieldImages', {'Id': '', });
lyr_SCHOOLS_1.set('fieldImages', {'Id': 'Range', 'SCHOOLS': 'TextEdit', });
lyr_MOSQUE_2.set('fieldImages', {'Id': 'Range', 'MOSQUE': 'TextEdit', });
lyr_RAILWAY_3.set('fieldImages', {'Id': 'Range', 'RAILWAY': 'TextEdit', });
lyr_BOUNDARY_4.set('fieldImages', {'Id': 'Range', });
lyr_STREETS_5.set('fieldImages', {'Id': 'Range', 'STREET': 'TextEdit', });
lyr_MINOR_ROADSS_6.set('fieldImages', {'Id': 'Range', 'MINORROADS': 'TextEdit', });
lyr_MAJOR_ROADS_7.set('fieldImages', {'Id': 'Range', 'MAJORROADS': 'TextEdit', });
lyr_HOTEL_8.set('fieldImages', {'Id': 'Range', 'HOTEL': 'TextEdit', 'HOTELS': 'TextEdit', });
lyr_HEALTHFACILITIES_9.set('fieldImages', {'Id': 'Range', 'HOSPITALS': 'Range', 'HOSPITAL': 'TextEdit', });
lyr_FILLINGSTATION_10.set('fieldImages', {'Id': 'Range', 'GASSTATION': 'TextEdit', });
lyr_BANKS_11.set('fieldImages', {'Id': 'Range', 'BANK': 'TextEdit', });
lyr_WORSHIPCENTRES_0.set('fieldLabels', {'Id': 'no label', });
lyr_SCHOOLS_1.set('fieldLabels', {'Id': 'no label', 'SCHOOLS': 'header label', });
lyr_MOSQUE_2.set('fieldLabels', {'Id': 'no label', 'MOSQUE': 'header label', });
lyr_RAILWAY_3.set('fieldLabels', {'Id': 'no label', 'RAILWAY': 'header label', });
lyr_BOUNDARY_4.set('fieldLabels', {'Id': 'no label', });
lyr_STREETS_5.set('fieldLabels', {'Id': 'no label', 'STREET': 'header label', });
lyr_MINOR_ROADSS_6.set('fieldLabels', {'Id': 'no label', 'MINORROADS': 'header label', });
lyr_MAJOR_ROADS_7.set('fieldLabels', {'Id': 'no label', 'MAJORROADS': 'header label', });
lyr_HOTEL_8.set('fieldLabels', {'Id': 'no label', 'HOTEL': 'no label', 'HOTELS': 'header label', });
lyr_HEALTHFACILITIES_9.set('fieldLabels', {'Id': 'no label', 'HOSPITALS': 'header label', 'HOSPITAL': 'no label', });
lyr_FILLINGSTATION_10.set('fieldLabels', {'Id': 'no label', 'GASSTATION': 'header label', });
lyr_BANKS_11.set('fieldLabels', {'Id': 'no label', 'BANK': 'header label', });
lyr_BANKS_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});