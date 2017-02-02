configure({
  configs: [
    './prod.js'
  ],
  sources: [
    source('amd', 'tinymce.searchreplace.demo', '../../src/demo/js', function (id) {
			return mapper.hierarchical(id).replace(/^tinymce\/searchreplace\//, '');
		})
  ]
});

