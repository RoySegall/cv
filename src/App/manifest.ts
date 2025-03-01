import manifestFile from '../manifest.yaml?raw';
import yaml from 'yaml';

export const manifest = yaml.parse(manifestFile);
