grunt-js-dependency-visualizer
==============================

JavaScript Module dependency visualizer for Grunt task

### Usage

This task use only `options` settings:

```
grunt.initConfig({
    'dependency-vizualizer': {
        example: {
            options: {
                srcPath: 'path/to/src',
                destPath: 'path/to/dest'
            }
        }
    }
});
```

options means:

- `srcPath` source detection path
- `destPath` output generated data path

### Description of dependency

@see https://github.com/ysugimoto/js-dependency-visualizer


#License

MIT License.

