### OSX ###
 * OS Security Updates

 * Firewall
   * See http://support.apple.com/en-us/HT1810 for cross-version guidance
   * (GUI) Choose System Preferences from the Apple menu, Security (10.5 and before) or Security & Privacy (10.6 and later), then the Firewall tab.
 * Anti-Virus Version
   * 
 * User privilege
   * 
 * Drive Encryption
   * (CLI) ```sudo fdesetup status```
   * (GUI) Choose System Preferences from the Apple menu, Security (10.5 and before) or Security & Privacy (10.6 and later), then the FileVault tab.
   * (TrueCrypt)
 * Services Running
   * (Command line) ```sudo launchctl list```
   * (Command line) ```ps -ef```
   * (GUI) The "Activity Monitor" application is located in /Applications/Utilities provides a similar interface to "top"

### Windows ###
If Windows is not your primary OS, you can download 

https://modernievirt.blob.core.windows.net/vhd/virtualmachine_instructions_2014-01-21.pdf


https://www.modern.ie/en-us/virtualization-tools#downloads (see also http://www.makeuseof.com/tag/download-windows-xp-for-free-and-legally-straight-from-microsoft-si/ ) 

**Windows 8**
 * OS Security Updates

 * Firewall
   *  (GUI) Start → Control Panel → Windows Firewall
 (more detail: http://windows.microsoft.com/en-us/windows-8/windows-firewall-from-start-to-finish)
 * Anti-Virus Version
   * 
 * User privilege
   * 
 * Drive Encryption
   * 
   * 
+https://diskcryptor.net/wiki/Main_Page

 * Services Running
   * 


**Windows 7**
In Windows 7, (GUI) Control Panel → All Control Panel Items → Action Center (Security tab) provides a quick run-down of most security features installed and their update status. It does not show drive encryption or specific versions.

 * OS Security Updates


 * Firewall
   * (GUI) Control Panel → All Control Panel Items → Windows Firewall
   * (CLI) ```Netsh Advfirewall show allprofiles```
 * Anti-Virus Version
   * 
 * User privilege
   * (GUI) Control Panel → All Control Panel Items → User Accounts and checking also the User Account Control settings.
 * Drive Encryption
   * (GUI) Control Panel → All Control Panel Items → BitLocker Drive Encryption
   * (TrueCrypt) , https://diskcryptor.net/wiki/Main_Page 
 * Services Running
   * (CLI) ```tasklist```
   * (GUI) Right-click on task bar, select "Start Task Manager"
   * (Advanced) Use TechNet/SysInternal's Process Explorer: http://technet.microsoft.com/en-us/sysinternals/bb896653.aspx 

**Windows XP**
 * OS Security Updates
   * Start → Control Panel → Security Center
 * Firewall
   * Start → Control Panel → Security Center
 * Anti-Virus Version
   * Start → Control Panel → Security Center
 * User privilege
   * (GUI) Start → Control Panel → User Accounts will reveal which users have admin priviledges.
 * Drive Encryption
   * (TrueCrypt), https://diskcryptor.net/wiki/Main_Page
 * Services Running
   * (CLI) ```tasklist``` (Pro only)
   * (GUI) Right-click on task bar, select "Start Task Manager"

### Linux ###
 * Firewall
   * (CLI) sudo iptables -L -n
   * (CLI) sudo ufw status  (Ubuntu, and only if installed)
   * (GUI) gufw (Ubuntu, and only if installed)
 * Anti-Virus Version
   * (CLI) deb: ```dpkg-query -l | grep virus``` rpm: ```yum list installed | grep virus```
   * See also: https://en.wikipedia.org/wiki/Linux_malware#Anti-virus_applications
 * User privilege
   * (CLI) ```groups```

 * Drive Encryption
   * 
   * (TrueCrypt)
 * Services Running
  * (CLI) ps -ef
  * (CLI) top



