export const RemoveFileExtension = (name: string) => (name.substring(0, name.lastIndexOf('.')) || name);
