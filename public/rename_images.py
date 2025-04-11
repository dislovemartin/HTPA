#!/usr/bin/env python3

import os
import glob
import shutil
from pathlib import Path

def list_image_files(directory):
    """List all image files in the given directory"""
    image_extensions = ['*.jpg', '*.jpeg', '*.png', '*.webp', '*.gif']
    files = []
    
    for ext in image_extensions:
        pattern = os.path.join(directory, ext)
        files.extend(glob.glob(pattern))
    
    return sorted(files)

def rename_files_in_directory(directory, prefix):
    """Rename all image files in the directory"""
    if not os.path.exists(directory):
        print(f"Directory {directory} does not exist!")
        return
    
    files = list_image_files(directory)
    if not files:
        print(f"No image files found in {directory}")
        return
    
    print(f"\nFound {len(files)} image files in {directory}")
    
    for file_path in files:
        file_name = os.path.basename(file_path)
        ext = os.path.splitext(file_name)[1]
        
        print("\n" + "=" * 40)
        print(f"File: {file_name}")
        print("=" * 40)
        print("Please view this file in your file manager or image viewer.")
        print("Enter a descriptive name (without extension, use kebab-case):")
        description = input("> ")
        
        if not description:
            print("Skipping this file...")
            continue
        
        new_name = f"{prefix}-{description}{ext}"
        new_path = os.path.join(directory, new_name)
        
        # Rename the file
        shutil.move(file_path, new_path)
        print(f"Renamed to: {new_name}")

def main():
    base_dir = "/home/dislove/文档/HTPA/public/images"
    
    print("Image Renaming Utility")
    print("=" * 22)
    
    # Check if directories exist
    directories = {
        "feature": os.path.join(base_dir, "feature"),
        "logos": os.path.join(base_dir, "logos"),
        "misc": os.path.join(base_dir, "misc")
    }
    
    # List available directories
    print("\nAvailable directories:")
    available_dirs = []
    for name, path in directories.items():
        if os.path.exists(path):
            print(f"- {name} ({path})")
            available_dirs.append((name, path))
    
    if not available_dirs:
        print("No image directories found!")
        return
    
    # Process directories
    for name, path in available_dirs:
        print(f"\nProcessing {name} directory...")
        rename_files_in_directory(path, name)
    
    print("\nRenaming complete!")

if __name__ == "__main__":
    main()
