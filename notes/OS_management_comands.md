# **Objective: Basic OS management Commands in Unix/Linux**

## 📁 **File Commands**

| Command        | Description                 | Example                   |
| -------------- | --------------------------- | ------------------------- |
| `ls`           | List directory contents     | `ls`                      |
| `ls -al`       | List all files with details | `ls -al`                  |
| `ls -lt`       | List by modification time   | `ls -lt`                  |
| `cd dir`       | Change directory            | `cd /var/log`             |
| `cd`           | Go to home                  | `cd`                      |
| `pwd`          | Print current directory     | `pwd`                     |
| `mkdir dir`    | Make a directory            | `mkdir new_folder`        |
| `cat >file`    | Create a file               | `cat > notes.txt`         |
| `more file`    | View file page by page      | `more notes.txt`          |
| `head file`    | First 10 lines              | `head notes.txt`          |
| `tail file`    | Last 10 lines               | `tail notes.txt`          |
| `tail -f file` | Monitor file live           | `tail -f /var/log/syslog` |
| `touch file`   | Create empty file           | `touch empty.txt`         |
| `rm file`      | Delete a file               | `rm notes.txt`            |
| `rm -r dir`    | Delete a directory          | `rm -r old_folder`        |
| `rm -f file`   | Force delete                | `rm -f locked.txt`        |
| `rm -rf dir`   | Force delete dir            | `rm -rf /tmp/cache`       |

---

## ⚙️ **Process Management**

| Command           | Description              | Example                         |
| ----------------- | ------------------------ | ------------------------------- |
| `cp file1 file2`  | Copy a file              | `cp a.txt b.txt`                |
| `cp -r dir1 dir2` | Copy directory           | `cp -r src/ backup/`            |
| `mv file1 file2`  | Move/rename file         | `mv a.txt b.txt`                |
| `ln -s file link` | Symbolic link            | `ln -s /var/log/syslog loglink` |
| `ps`              | Show running processes   | `ps aux`                        |
| `top`             | Real-time process list   | `top`                           |
| `kill pid`        | Kill by PID              | `kill 1234`                     |
| `killall proc`    | Kill by name             | `killall firefox`               |
| `pkill pattern`   | Kill by pattern          | `pkill python`                  |
| `bg`              | Resume job in background | `bg`                            |
| `fg`              | Foreground last job      | `fg`                            |
| `fg n`            | Foreground job n         | `fg %1`                         |

---

## 🖥️ **System Info**

| Command             | Description       | Example              |
| ------------------- | ----------------- | -------------------- |
| `date`              | Current date/time | `date`               |
| `cal`               | Monthly calendar  | `cal`                |
| `uptime`            | System uptime     | `uptime`             |
| `w`                 | Who is logged in  | `w`                  |
| `whoami`            | Current user      | `whoami`             |
| `finger user`       | User info         | `finger alice`       |
| `uname -a`          | System info       | `uname -a`           |
| `cat /proc/cpuinfo` | CPU info          | `cat /proc/cpuinfo`  |
| `cat /proc/meminfo` | Memory info       | `cat /proc/meminfo`  |
| `man command`       | Manual page       | `man ls`             |
| `df`                | Disk usage        | `df -h`              |
| `du`                | Directory usage   | `du -sh /home/user/` |
| `free`              | Memory/swap usage | `free -m`            |
| `whereis app`       | App locations     | `whereis python`     |
| `which app`         | Path to command   | `which python`       |

---

## 📦 **Compression**

| Command                     | Description          | Example                         |
| --------------------------- | -------------------- | ------------------------------- |
| `tar cf file.tar file`      | Create tar           | `tar cf archive.tar file.txt`   |
| `tar xf file.tar`           | Extract tar          | `tar xf archive.tar`            |
| `tar czf file.tar.gz files` | Create gzipped tar   | `tar czf archive.tar.gz *.txt`  |
| `tar xzf file.tar.gz`       | Extract gzipped tar  | `tar xzf archive.tar.gz`        |
| `tar cjf file.tar.bz2`      | Create bzip2 archive | `tar cjf archive.tar.bz2 *.log` |
| `tar xjf file.tar.bz2`      | Extract bzip2        | `tar xjf archive.tar.bz2`       |
| `gzip file`                 | Compress file        | `gzip notes.txt`                |
| `gzip -d file.gz`           | Decompress           | `gzip -d notes.txt.gz`          |

---

## 🌐 **Network Related**

| Command        | Description     | Example                             |
| -------------- | --------------- | ----------------------------------- |
| `ping host`    | Ping host       | `ping google.com`                   |
| `whois domain` | Domain info     | `whois openai.com`                  |
| `dig domain`   | DNS info        | `dig openai.com`                    |
| `dig -x host`  | Reverse DNS     | `dig -x 8.8.8.8`                    |
| `wget file`    | Download file   | `wget https://example.com/file.txt` |
| `wget -c file` | Resume download | `wget -c file.txt`                  |

---

## ⌨️ **Shortcuts**

| Shortcut | Action              |
| -------- | ------------------- |
| `Ctrl+C` | Stop command        |
| `Ctrl+Z` | Pause command       |
| `Ctrl+D` | End input/logout    |
| `Ctrl+W` | Delete last word    |
| `Ctrl+U` | Delete whole line   |
| `Ctrl+R` | Search history      |
| `!!`     | Repeat last command |
| `exit`   | Exit terminal       |

---

## 🔐 **Permissions & Ownership**

| Command            | Description     | Example                 |
| ------------------ | --------------- | ----------------------- |
| `chmod 755 file`   | Set permissions | `chmod 755 script.sh`   |
| `su`               | Become root     | `su`                    |
| `sudo command`     | Run as root     | `sudo apt update`       |
| `chown user file`  | Change owner    | `chown alice notes.txt` |
| `chgrp group file` | Change group    | `chgrp staff notes.txt` |

---
