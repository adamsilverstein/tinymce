configure({
  configs: [
    './prod.js'
  ],
  sources: [
    source('amd', 'tinymce.visualchars.demo', '../../src/demo/js', function (id) {
			return mapper.hierarchical(id).replace(/^tinymce\/visualchars\//, '');
		})
  ]
});

