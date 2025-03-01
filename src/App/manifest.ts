import manifestFile from '../manifest.yaml?raw';
import yaml from 'yaml';

type Manifest = {
    color: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'pink' | 'purple';
}

export const manifest = yaml.parse(manifestFile) as Manifest;
