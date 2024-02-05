# File Manager

## Pay attention!
1. `path_to_directory`, `path_to_new_directory` or `path_to_file` can be relative or absolute
2.  If a directory or file name contains spaces, please **enclose the name in double quotes** (`“file name”`)
3.  The **compression/decompression** rules are described in detail in the [corresponding paragraph](#zlib) below.


## Start/finish program

- The program is started by npm-script `start` in following way:
```bash
npm run start -- --username=your_username
```
- The programm is finished by: 
 1. `ctrl + c` pressed 
 2. `.exit` command into console


## List of operations and their syntax:
- Navigation & working directory (nwd)
    - Go upper from current directory 
    ```bash
    up
    ```
    - Go to dedicated folder from current directory 
    ```bash
    cd path_to_directory
    ```
    - Print in console list of all files and folders in current directory

    ```bash
    ls
    ```
- Basic operations with files
    - Read file and print it's content in console: 
    ```bash
    cat path_to_file
    ```
    - Create empty file in current working directory: 
    ```bash
    add new_file_name
    ```
    - Rename file: 
    ```bash
    rn path_to_file new_filename
    ```
    - Copy file: 
    ```bash
    cp path_to_file path_to_new_directory
    ```
    - Move file 
    ```bash
    mv path_to_file path_to_new_directory
    ```
    - Delete file: 
    ```bash
    rm path_to_file
    ```
- Operating system info (prints following information in console)
    - Get EOL 
    ```bash
    os --EOL
    ```
    - Get host machine CPUs info
    ```bash
    os --cpus
    ```
    - Get home directory
    ```bash
    os --homedir
    ```
    - Get current *system user name* 
    ```bash
    os --username
    ```
    - Get CPU architecture  
    ```bash
    os --architecture
    ```
- Hash calculation  
    - Calculate hash for file
    ```bash
    hash path_to_file
    ```
- ## <a id="zlib">Compress and decompress operations</a> 
    - Compress file (using Brotli algorithm)

    --`Path_to_file` - relative or absolute path to the file that will be compressed (for example `test.txt`). `Path_to_destination` - relative or absolute path to an archive with a name (for example `../zip/test.txt.br` or `test.txt.br` if the archive must be located in the current directory)

    ```bash
    compress path_to_file path_to_destination
    
    ```
    - Decompress file (using Brotli algorithm)

    -- `Path_to_file` - relative or absolute path to relative or absolute path to the file that will be decompressed (for example `test.txt.br`). `Path_to_destination` - relative or absolute path to file (for example `test.txt` if the file must be located in the current directory)
    ```bash
    decompress path_to_file path_to_destination
    ```